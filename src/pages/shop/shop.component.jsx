import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from "../collection/collection.component";

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        console.log(collectionRef);
   
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        });
    };

    render() {
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Routes>
                    <Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} {...this.props} />} />
                    <Route path="/:collectionId" element={<CollectionPageWithSpinner isLoading={loading} {...this.props} />} />
                </Routes>
            </div>);
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);
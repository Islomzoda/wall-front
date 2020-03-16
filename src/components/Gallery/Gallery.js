import React, { useEffect } from 'react';
import EditGalleryForm from '../EditGalleryForm/EditGalleryForm';
import { useSelector, useDispatch } from 'react-redux';
import GalleryItemsList from '../../GalleryItemsList/GalleryItemsList';
import { galleryItemsListFetch } from '../../actions/actionCreators';

export default function Gallery() {
    const state = useSelector(state => state.storage.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(galleryItemsListFetch());
    }, [dispatch]);
    return (
        <>
            <EditGalleryForm />
            <GalleryItemsList {...state}/>
        </>
    )
}

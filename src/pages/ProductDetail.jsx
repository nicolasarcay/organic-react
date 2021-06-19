import React from 'react';
import HeaderProduct from '../components/products-layout/HeaderProduct'
import ContentProduct from '../components/products-layout/ContentProduct'
import RelatedProduct from '../components/products-layout/RelatedProduct'

function ProductDetail() {
    return (
        <div>
            <HeaderProduct />
            <ContentProduct />
            <RelatedProduct />
        </div>
    )
}

export default ProductDetail

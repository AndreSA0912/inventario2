import React from 'react';
import FormCreateProduct from '../components/Formulario/FormCreateProduct';
import './Create.css';

const CreateProduct = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}> Cargar nuevo producto </h1>
            <FormCreateProduct />
        </div>
    );
}

export default CreateProduct;

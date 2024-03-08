import React from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import '../user-login/Dashboard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="product-actions">
        <button className="action-button">Add to Cart</button>
        <div className="action-icons">
          <FaHeart className="icon" />
          <FaShare className="icon" />
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'Powerful computing on the go with sleek design and cutting-edge features.',
      price: 5000.99,
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'iPhone',
      description: 'Innovative and stylish smartphone offering a seamless blend of form and function.',
      price: 2000.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_g16AiYJODY1zTsUcMlFYoetbLpBOpDYosb14sL-SxKRcw-NbT8-SJEmQoW1OGvqnUM&usqp=CAU',
    },
   
    {
      id: 3,
      name: 'iPad',
      description: 'Versatile tablet for productivity and entertainment with a stunning display and intuitive interface.',
      price: 1000.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWNqbgVTDWEweDuwXeXi6KQYUiz_KrK_Vng&usqp=CAU',
    },
  ];

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

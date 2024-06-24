import { useState, useEffect } from 'react';
import Block from '../components/Block';
import { endpoint } from '../config/apiEndpoints';
import logoImage from '../assets/img/logo_color.png';

export const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlockchain();
  }, []);

  const fetchBlockchain = async () => {
    try {
      const response = await fetch(endpoint.getBlockchain, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();

        setBlocks(result.data.chain);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="blocks">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <img
          className="mx-auto h-10 w-auto"
          src={logoImage}
          alt="ClassicCoin-Logo"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Blocks
        </h2>
        {blocks.map((block, index) => (
          <Block
            key={block.hash}
            block={block}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

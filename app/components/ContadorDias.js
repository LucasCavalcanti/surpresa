'use client'
import { useEffect, useState } from 'react';

export default function ContadorDias() {
  const [dias, setDias] = useState(0);

  useEffect(() => {
    const dataInicio = new Date(2024, 11, 9); // Mês 11 = dezembro (0-based)
    const hoje = new Date();
    const diffTime = hoje - dataInicio; // diferença em milissegundos
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // dias (contando inclusive)
    setDias(diffDias);
  }, []);

  return (
    <div className="contador-dias">
      <strong>Estamos juntos há:</strong><br />
      <span>{dias} {dias === 1 ? 'dia' : 'dias'}</span>
    </div>
  );
}

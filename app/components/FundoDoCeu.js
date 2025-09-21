'use client'
import { useEffect, useState } from 'react';

export default function FundoDoCeu() {
  const [tema, setTema] = useState('dia');

  useEffect(() => {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 18) setTema('dia');
    else setTema('noite');
  }, []);

  return <div className={`ceu-fundo ${tema}`}></div>;
}

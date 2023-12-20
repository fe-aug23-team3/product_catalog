import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './Root';

document.title = '👌 Nice Gadgets';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);

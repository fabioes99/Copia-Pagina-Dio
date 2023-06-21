import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import './styles.css';

const SwitchDemo = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 10 }}>
       Disponivel para ofertas de emprego?
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
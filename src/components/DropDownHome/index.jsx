import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownHome = () => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
        <FontAwesomeIcon icon={faCircleQuestion} size='xl' style={{"--fa-secondary-color": "#ffffff",}} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" align={'end'} sideOffset={12}>
          <DropdownMenu.Item className="DropdownMenuItem">
           Comece por aqui 
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Precisa de ajuda?
          </DropdownMenu.Item>
         
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownHome;
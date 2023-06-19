import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DivCoracao, NCoracao } from './styles.js'

const DropdownHeart = () => {

  return (
    <DropdownMenu.Root >
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
        <DivCoracao>
          <FontAwesomeIcon icon={faHeart} size='xl' style={{color: "#ce2222",}} /><NCoracao>5</NCoracao>
        </DivCoracao>
        </button>     
      </DropdownMenu.Trigger>
     
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="teste" align={'center'} sideOffset={12}>
          <DropdownMenu.Item className="Item">
           <span style={{fontWeight: '900', fontSize: '14px'}}>Recuperacao dos Hearts</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item className="Item">
            Voce esta com todos os hearts completos!
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownHeart;
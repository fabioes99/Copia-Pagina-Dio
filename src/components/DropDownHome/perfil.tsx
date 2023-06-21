import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { UserPicture, Teste } from './styles'

const DropdownPerfil = () => {

  return (
    <Teste>
    <DropdownMenu.Root >
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <UserPicture src="https://avatars.githubusercontent.com/u/59034232?v=4" />
          <FontAwesomeIcon icon={faChevronDown} size='lg' style={{color: "#ededed",}} />
        </button>     
      </DropdownMenu.Trigger>
     
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" align={'end'} sideOffset={12}>
          <DropdownMenu.Item className="DropdownMenuItem">
           Perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Minhas Vagas
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Certificados
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Assinatura
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Precisa de ajuda?
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />
         
          <DropdownMenu.Item className="DropdownMenuItem">
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    </Teste>
    
  );
};

export default DropdownPerfil;
import { Badge, Button, Dropdown, Link, Navbar, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { ModalLogin } from '../modal';
import { icons } from './icons';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';

export const Nav = () => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />

            <div style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               lineHeight: 1.2,
               position: 'relative'
            }}>
               <Badge
                  color="primary"
                  variant="flat"
                  style={{
                     fontSize: '0.65rem',
                     padding: '2px 6px',
                     borderRadius: '8px',
                     marginLeft: '5.5rem',
                     marginTop: '-10px',
                     position: 'absolute',


                  }}
               >
                  by 29Bytes
               </Badge>

               <Text
                  b
                  size="$lg"
                  color="inherit"
                  css={{ letterSpacing: '-0.5px' }}
               >
                  ApnaKhata
               </Text>
            </div>
         </Navbar.Brand>







         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            {/* <ModalLogin /> */}

            <Navbar.Item>
               <Button auto flat href="#">
                  Join Waitlist
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};

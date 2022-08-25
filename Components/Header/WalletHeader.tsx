import { Button, Container, Flex, Input, Text } from "@theme-ui/components";
import WalletManager from "../WalletManager/WalletManager";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "../icons";

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  return (
    <Flex
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 98,
        background: (theme) => theme.colors?.backgroundGradient,
        borderBottom: "1px solid",
        borderColor: "background2",
      }}
    >
      <Container className="ClubhouseTB">
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          p=".8rem"
        >
          <Flex
            as="a"
            sx={{ alignItems: "center", flexDirection: "column" }}
          ></Flex>

          <Flex
            as="nav"
            sx={{
              gap: "1.6rem",
              display: "none",
              alignItems: "center",

              /** Mobile styles when the menu is active */
              ...(isMobileMenuActive && {
                display: "flex",
                position: "fixed",
                flexDirection: "column",
                alignItems: "center",
                // marginTop: "6",
                left: "0",
                width: "100vw",
                height: "20vh",
                padding: "1.6rem",
                transition:
                  "opacity 0.125s cubic-bezier(0.175, 0.885, 0.32, 1.275),visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                backgroundColor: "black",
                zIndex: 99,

                "& > a": {
                  marginBottom: ".8rem",
                },

                "&.active": {
                  visibility: "visible",
                  opacity: 1,
                },
              }),

              /** Desktop styles (reset mobile) */
              "@media (min-width: 768px)": {
                display: "flex",
                flexDirection: "row",
                width: "auto",
                height: "auto",
                padding: 0,
                position: "relative",
              },
            }}
          >
            <Button
              sx={{
                alignSelf: "flex-end",
                padding: ".8rem",

                ...(!isMobileMenuActive && { display: "none" }),
              }}
              onClick={() => setIsMobileMenuActive(false)}
              title="idk"
            >
              <CloseIcon />
            </Button>
            <WalletManager />
          </Flex>
          <Button
            sx={{
              padding: ".8rem",
              "@media(min-width: 768px)": {
                display: "none",
              },
            }}
            onClick={() => setIsMobileMenuActive(true)}
            title="idk"
          >
            <MenuIcon />
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;

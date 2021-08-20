import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

const ThemeToggle = () => {
    //const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="repository"
            icon={<VscGithubAlt />}
            //onClick={toggleColorMode}
        />
    );
};

export default ThemeToggle;

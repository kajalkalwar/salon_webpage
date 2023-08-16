import {
  Stack,
  Box,
  Button,
  Drawer,
  Typography,
  ButtonGroup,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./ButtonStyles";

const salonButton = ["I am Customer", "Salon"];

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideDrawer: React.FC<IProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box className={classes.box}>
        <CloseIcon onClick={() => setIsDrawerOpen(false)} />
        <Stack>
          <Typography variant="h4">Login</Typography>
        </Stack>
        <Stack direction="row" className={classes.stack}>
          {salonButton.map((item, index) => (
            <ButtonGroup className={classes.btnGroup} key={item}>
              <Button className={classes.btn1}>{item}</Button>
            </ButtonGroup>
          ))}
        </Stack>
        <Stack>
          <Typography variant="body2">Mobile No</Typography>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;

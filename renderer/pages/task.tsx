import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MinuxIcon from "@mui/icons-material/Remove";

const TaskPage = () => {
  return (
    <List sx={{ py: 0 }}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
        return (
          <ListItem
            key={value}
            disablePadding
            divider
            dense
            secondaryAction={
              <IconButton edge="end">
                {value % 2 == 0 ? <AddIcon /> : <MinuxIcon />}
              </IconButton>
            }
          >
            <ListItemButton disableGutters>
              <ListItemIcon>
                <Checkbox size="small" />
              </ListItemIcon>
              <ListItemText
                primary={`task${value} 日本語だとこんな感じになるので、長い文章だとどうなんるですかね`}
                primaryTypographyProps={{ sx: { typography: "body2" } }}
                secondary={`2023/12/02`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskPage;

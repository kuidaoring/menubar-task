import {
  Checkbox,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MinuxIcon from "@mui/icons-material/Remove";

const TaskPage = () => {
  return (
    <List sx={{ pb: 0 }}>
      <ListItem disablePadding divider dense>
        <InputBase
          placeholder="タスクを追加"
          fullWidth
          size="small"
          sx={{ mx: 1, typography: "body2" }}
        ></InputBase>
      </ListItem>
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
            <ListItemButton disableGutters sx={{ py: 0 }}>
              <ListItemIcon>
                <Checkbox size="small" />
              </ListItemIcon>
              <ListItemText
                primary={`task${value} 日本語だとこんな感じになるので、長い文章だとどうなんるですかね`}
                primaryTypographyProps={{ sx: { typography: "body2" } }}
                secondary={`2023/12/02`}
                sx={{ my: 0 }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskPage;

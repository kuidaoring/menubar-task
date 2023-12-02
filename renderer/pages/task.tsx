import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TaskPage = () => {
  return (
    <List sx={{ py: 0 }}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => {
        return (
          <ListItem key={value} disablePadding>
            <ListItemButton sx={{ py: 0 }}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={`task${value}`} secondary={`2023/12/02`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskPage;

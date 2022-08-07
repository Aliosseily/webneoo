import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const CustomBreadcrumbs = ({ data }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {data.map(({ name, href }, index) =>
          index !== data.length - 1 ? (
            <Link underline="hover" key="1" color="inherit" href={href}>
              {name}
            </Link>
          ) : (
            <Typography key="3" color="text.primary">
              {name}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadcrumbs;

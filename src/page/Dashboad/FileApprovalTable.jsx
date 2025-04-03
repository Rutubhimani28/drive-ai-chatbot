import React from "react";
import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { Check, Close, Description } from "@mui/icons-material";

const files = [
  {
    name: "Fanisko-Employee Referral Policy Document_2025.pdf",
    size: "1.2 MB",
    uploaded: "3/25/2025",
    status: "Pending",
    type: "pdf",
  },
  {
    name: "Fanisko Work Place Harassment policy 2022.docx",
    size: "825.2 KB",
    uploaded: "3/25/2025",
    status: "Pending",
    type: "docx",
  },
  {
    name: "Fanisko Security Incident Management Policy",
    size: "317.4 KB",
    uploaded: "3/25/2025",
    status: "Pending",
    type: "docx",
  },
];

const FileApprovalTable = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 2, p: 2 , borderLeft: "4px solid #FFA726"}}>
      <CardContent >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <Chip label="Pending" color="warning" variant="outlined" sx={{ mr: 1 , backgroundColor : "#fef3c7" }} />
            <Typography variant="h6" fontWeight="bold">
              Files Pending Approval
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" sx={{textTransform : 'capitalize'}}>
            Approve All
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Uploaded</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Description color="error" sx={{ mr: 1 }} />
                      {file.name}
                    </Box>
                  </TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.uploaded}</TableCell>
                  <TableCell>
                    <Chip label="Pending" color="warning"  variant="outlined" sx={{backgroundColor : "#fef3c7"}}/>
                  </TableCell>
                  <TableCell>
                    <IconButton color="success">
                      <Check />
                    </IconButton>
                    <IconButton color="error">
                      <Close />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default FileApprovalTable;
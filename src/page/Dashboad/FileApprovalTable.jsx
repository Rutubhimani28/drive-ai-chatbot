import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, IconButton, Chip, Box } from "@mui/material";
import { Cancel, PictureAsPdf, Description } from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const fileData = [
  { name: "Fanisko-Employee Referral Policy Document_2025.pdf", size: "1.2 MB", uploaded: "3/25/2025", type: "pdf", status: "Pending" },
  { name: "Fanisko Work Place Harassment policy 2022.docx", size: "825.2 KB", uploaded: "3/25/2025", type: "doc", status: "Pending" },
  { name: "Fanisko Security Incident Management Policy", size: "317.4 KB", uploaded: "3/25/2025", type: "doc", status: "Pending" },
];

const FileApprovalTable = () => {
  return (
    <TableContainer sx={{ borderRadius: 2, border: "2px solid #0000000D", boxShadow: ' 0px 1px 2px 0px #0000000D', p: 2, borderLeft: "4px solid #FBC02D" }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box display="flex" alignItems="center">
          <Chip label="Pending" sx={{ bgcolor: "#FCEFCF", color: "#AB8B00", fontWeight: "bold", mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">Files Pending Approval</Typography>
        </Box>
        <Button variant="outlined" color="primary" className="!capitalize">Approve All</Button>
      </Box>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow className="!text-[#78716C]">
            <TableCell>Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Uploaded</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {fileData.map((file, index) => (
            <TableRow key={index}>
              {/* File Name with Icon */}
              <TableCell>
                <Box display="flex" alignItems="center">
                  {file.type === "pdf" ? (
                    <PictureAsPdf sx={{ color: "red", mr: 1 }} />
                  ) : (
                    <Description sx={{ color: "green", mr: 1 }} />
                  )}
                  {file.name}
                </Box>
              </TableCell>

              {/* File Size */}
              <TableCell>{file.size}</TableCell>

              {/* Uploaded Date */}
              <TableCell>{file.uploaded}</TableCell>

              {/* Status */}
              <TableCell>
                <Chip label="Pending" sx={{ bgcolor: "#FCEFCF", color: "#AB8B00", fontWeight: "bold" }} />
              </TableCell>

              {/* Actions */}
              <TableCell>
                <IconButton color="success">
                  <CheckIcon />
                </IconButton>
                <IconButton color="error">
                  <CloseIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileApprovalTable;

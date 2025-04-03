import { Box, Card, Grid, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import FileApprovalTable from './FileApprovalTable';

const Dashboard = () => {
    const data = {
        totalConversations: 1285,
        filesAnalyzed: 347,
        userSatisfaction: "94%",
        chatbotStatus: true,
    };

    return (
        <Box sx={{ p: 4 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, width: "100%" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} mt={1}>
                            <Typography variant="h6" fontWeight="semi">Chatbot Status</Typography>
                            <Switch checked={data.chatbotStatus} color="success" />
                        </Stack>
                        <Typography variant="body1" color="success.main">Online</Typography>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, width: "100%" }}>
                        <Typography variant="body2" color="textSecondary">Total Conversations</Typography>
                        <Typography variant="h5" fontWeight="bold">{data.totalConversations}</Typography>
                        <Typography variant="body2" color="success.main">+12% ↑</Typography>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, width: "100%" }}>
                        <Typography variant="body2" color="textSecondary">Files Analyzed</Typography>
                        <Typography variant="h5" fontWeight="bold">{data.filesAnalyzed}</Typography>
                        <Typography variant="body2" color="success.main">+8% ↑</Typography>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, width: "100%" }}>
                        <Typography variant="body2" color="textSecondary">User Satisfaction</Typography>
                        <Typography variant="h5" fontWeight="bold">{data.userSatisfaction}</Typography>
                        <Typography variant="body2" color="success.main">+2% ↑</Typography>
                    </Card>
                </Grid>
            </Grid>


            {/* File Approval Table */}
            <Box mt={8}>
                <FileApprovalTable />
            </Box>
        </Box>
    );
};

export default Dashboard;

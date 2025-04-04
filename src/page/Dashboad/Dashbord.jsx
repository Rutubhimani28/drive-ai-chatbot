import { Box, Card, Grid, Stack, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import FileApprovalTable from './FileApprovalTable';

const Dashboard = () => {
    const [isOnline, setIsOnline] = useState(true);

    const data = {
        totalConversations: 1285,
        filesAnalyzed: 347,
        userSatisfaction: "94%",
        chatbotStatus: true,
    };

    return (
        <Box sx={{ p: 4 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>

                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ borderRadius: 2, border: "2px solid #0000000D", boxShadow: ' 0px 1px 2px 0px #0000000D' }} className='px-9 py-4'>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} mt={1} className='pb-4'>
                            <Typography variant="h6" fontWeight="semi" className='text-lg'>Chatbot Status</Typography>
                            <Switch checked={data.chatbotStatus} color="success" />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1} className='pb-4'>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    backgroundColor: isOnline ? "green" : "gray",
                                }}
                            />
                            <Typography className='text-2xl'>{isOnline ? "Online" : "Offline"}</Typography>
                        </Stack>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2,  border: "2px solid #0000000D", boxShadow: ' 0px 1px 2px 0px #0000000D' }} className='px-9 py-4'>
                        <Typography variant="body2" color="textSecondary" className='pb-2 text-sm  '>Total Conversations</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} mt={1} className='pb-4'>
                            <Typography variant="h5" className='text-2xl'>{data.totalConversations}</Typography>
                            <sub><Typography variant="body2" color="success.main" >+12% ↑</Typography></sub>
                        </Stack>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, border: "2px solid #0000000D", boxShadow: ' 0px 1px 2px 0px #0000000D' }} className='px-9 py-4'>
                        <Typography variant="body2" color="textSecondary" className='pb-2 text-sm '>Files Analyzed</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} mt={1} className='pb-4'>
                            <Typography variant="h5" className='text-2xl'>{data.filesAnalyzed}</Typography>
                            <sub><Typography variant="body2" color="success.main" >+8% ↑</Typography></sub>
                        </Stack>
                    </Card>
                </Grid>
                <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                    <Card sx={{ p: 3, borderRadius: 2, border: "2px solid #0000000D", boxShadow: ' 0px 1px 2px 0px #0000000D' }} className='px-9 py-4'>
                        <Typography variant="body2" color="textSecondary" className='pb-2 text-sm '>User Satisfaction</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} mt={1} className='pb-4'>
                            <Typography variant="h5" className='text-2xl'>{data.userSatisfaction}</Typography>
                            <sub><Typography variant="body2" color="success.main" >+2% ↑</Typography></sub>
                        </Stack>
                    </Card>
                </Grid>
                {/* <Grid size={{ xs: 2, sm: 4, md: 3 }}>
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
                </Grid> */}
            </Grid>


            {/* File Approval Table */}
            <Box mt={8}>
                <FileApprovalTable />
            </Box>
        </Box>
    );
};

export default Dashboard;

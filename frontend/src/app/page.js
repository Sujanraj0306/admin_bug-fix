"use client";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// components
import Logo from '../components/shared/Logo';
import PageContainer from '../components/container/PageContainer';
import AuthLogin from '../components/authForms/AuthLogin';

export default function Login() {
  
  return (
    
    <PageContainer title="Login Page" description="this is Sample page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
              title={
                <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    
                      New to Modernize?
                    
                  </Stack>
              }

              subtext={
                <Stack direction="row" spacing={1} justifyContent="center" >
                    
                    <Typography color="textSecondary" variant="subtitle1" fontWeight="500">
                    Use your work email to log in to your workspace.
                    </Typography>
                    
                  </Stack>
              }

                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Modernize?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/auth/auth2/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

Login.layout = "Blank";


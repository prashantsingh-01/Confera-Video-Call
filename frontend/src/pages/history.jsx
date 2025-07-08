import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Box,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
  const fetchHistory = async () => {
    try {
      const history = await getHistoryOfUser();
      if (Array.isArray(history)) {
        setMeetings(history);
      } else {
        console.error("Unexpected history response:", history);
        setMeetings([]); // default to empty
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
      setMeetings([]); // fallback to empty on error
    }
  };

    fetchHistory();
    }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <IconButton onClick={() => routeTo("/home")}>
        <HomeIcon />
      </IconButton>

      {meetings.length !== 0 ? (
        meetings.map((e) => (
          <Card key={e.meetingCode} variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Code: {e.meetingCode}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No past meetings found.
        </Typography>
      )}
    </Box>
  );
}

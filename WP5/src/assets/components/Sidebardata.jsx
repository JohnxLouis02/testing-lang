import React from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
export const Sidebardata = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon/>,
    link: "/delete"

  },

  {
    title: "Student Handbook",
    icon: <BookOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "Minutes of the Meeting",
    icon: <EventAvailableOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "Faculty",
    icon: <PeopleAltOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "Documents and Archives",
    icon: <FolderOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "Manage Task",
    icon: <TaskOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "Manage Concerns",
    icon: <EmailOutlinedIcon/>,
    link: "/dashboard"

  },

  {
    title: "College Calendar",
    icon: <TodayOutlinedIcon/>,
    link: "/dashboard"

  },
  {
    title: "Logout",
    icon: <LoginOutlinedIcon/>,
    link: "/dashboard"

  },


];
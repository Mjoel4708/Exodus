import React from 'react'
import { Sidebar } from "./"
import { Col, Row, Container } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  ViewSwitcher,
  Toolbar,
  AppointmentForm,
  AppointmentTooltip,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
const currentDate = '2021-04-04';
const schedulerData = [
  { startDate: '2021-04-04T09:45', endDate: '2021-04-04T11:00', title: 'Request 1' },
  { startDate: '2021-04-04T12:00', endDate: '2021-04-04T13:30', title: 'Request 2' },
];
function Events() {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col style={{padding: "30px", height: "900px", overflowY: "auto"}}>
          <Paper>
            <Scheduler
              data={schedulerData}
            >
              <ViewState
                currentDate={currentDate}
              />
              <WeekView
                startDayHour={9}
                endDayHour={14}
              />
              <DayView />
              <MonthView />
              <Appointments />
              <AppointmentTooltip
                showOpenButton
                showDeleteButton
              />
              <AppointmentForm />
              <Toolbar />
              <ViewSwitcher />
            </Scheduler>
          </Paper>
        </Col>
      </Row>
      
    </div>
  )
}

export default Events


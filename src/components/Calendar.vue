<template>
    <div ref="calendarContainer"></div>
  </template>
  
  <script>
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  
  export default {
    name: 'MyCalendar',
    mounted() {
      this.initCalendar();
    },
    methods: {
      initCalendar() {
        const calendar = new Calendar(this.$refs.calendarContainer, {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          events: [
            { title: 'Event 1', date: '2024-08-01', color: '#6f42c1' },
            { title: 'Event 2', date: '2024-08-02', color: '#a855f7' }
          ],
          eventColor: '#6f42c1',
          eventDidMount: this.styleEvent,
          datesSet: this.applyStyles
        });
        calendar.render();
      },
      styleEvent(eventInfo) {
        eventInfo.el.style.backgroundColor = eventInfo.event._def.backgroundColor || '#6f42c1';
      },
      applyStyles() {
        const toolbarTitle = document.querySelector('.fc-toolbar-title');
        if (toolbarTitle) {
          toolbarTitle.style.fontSize = '0.9rem';
          toolbarTitle.style.fontWeight = '600';
        }
        
        const prevButton = document.querySelector('.fc-prev-button');
        const nextButton = document.querySelector('.fc-next-button');
        if (prevButton) {
          prevButton.style.backgroundColor = '#007bff';
          prevButton.style.border = 'none';
          prevButton.style.color = 'white';
          prevButton.addEventListener('mouseover', () => {
            prevButton.style.backgroundColor = '#0056b3';
          });
          prevButton.addEventListener('mouseout', () => {
            prevButton.style.backgroundColor = '#007bff';
          });
        }
        if (nextButton) {
          nextButton.style.backgroundColor = '#007bff';
          nextButton.style.border = 'none';
          nextButton.style.color = 'white';
          nextButton.addEventListener('mouseover', () => {
            nextButton.style.backgroundColor = '#0056b3';
          });
          nextButton.addEventListener('mouseout', () => {
            nextButton.style.backgroundColor = '#007bff';
          });
        }
  
        const tableCells = document.querySelectorAll('.fc-daygrid-day');
        tableCells.forEach(cell => {
          cell.style.fontWeight = 'normal';
          cell.style.color = '#999';
          cell.style.backgroundColor = '#f9f9f9';
        });
        
        const eventTitles = document.querySelectorAll('.fc-event-title');
        eventTitles.forEach(title => {
          title.style.fontWeight = 'normal';
          title.style.color = '#666';
        });
        
        const dayHeaders = document.querySelectorAll('.fc-day-header');
        dayHeaders.forEach(header => {
          header.style.fontWeight = 'normal';
          header.style.color = '#666';
        });
      }
    }
  }
  </script>
  
  <style>
  /* Optional: Additional styles */
  </style>
  
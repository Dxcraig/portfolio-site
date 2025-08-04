import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  dataSciences = [
    { name: 'Python Basics', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'Excel Analytics', logo: 'https://img.icons8.com/color/48/microsoft-excel-2019.png', isInvertLogo: false },
    { name: 'Data Visualization', logo: 'https://img.icons8.com/color/48/bar-chart.png', isInvertLogo: false },
    { name: 'Basic Statistics', logo: 'https://img.icons8.com/color/48/statistics.png', isInvertLogo: false },
    { name: 'Learning ALX', logo: 'https://img.icons8.com/color/48/graduation-cap.png', isInvertLogo: false },
    { name: 'Jupyter Notebooks', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jupyter/jupyter-original.svg', isInvertLogo: false }
  ];

  programmings = [
    { name: 'Traffic Operations', logo: 'https://img.icons8.com/color/48/traffic-light.png', isInvertLogo: false },
    { name: 'Team Coordination', logo: 'https://img.icons8.com/color/48/management.png', isInvertLogo: false },
    { name: 'Schedule Management', logo: 'https://img.icons8.com/color/48/schedule.png', isInvertLogo: false },
    { name: 'Customer Service', logo: 'https://img.icons8.com/color/48/customer-support.png', isInvertLogo: false },
    { name: 'Problem Solving', logo: 'https://img.icons8.com/color/48/problem-solving.png', isInvertLogo: false },
    { name: 'Communication', logo: 'https://img.icons8.com/color/48/communication.png', isInvertLogo: false }
  ];

  databases = [
    { name: 'Excel', logo: 'https://img.icons8.com/color/48/microsoft-excel-2019.png', isInvertLogo: false },
    { name: 'Google Sheets', logo: 'https://img.icons8.com/color/48/google-sheets.png', isInvertLogo: false },
    { name: 'Basic SQL', logo: 'https://img.icons8.com/color/48/database.png', isInvertLogo: false },
    { name: 'Data Entry', logo: 'https://img.icons8.com/color/48/data-configuration.png', isInvertLogo: false },
    { name: 'CSV Files', logo: 'https://img.icons8.com/color/48/csv.png', isInvertLogo: false },
    { name: 'Learning Power BI', logo: 'https://img.icons8.com/color/48/power-bi.png', isInvertLogo: false }
  ];

  adminTools = [
    { name: 'Microsoft Office', logo: 'https://img.icons8.com/color/48/microsoft-office-2019.png', isInvertLogo: false },
    { name: 'Email Management', logo: 'https://img.icons8.com/color/48/email.png', isInvertLogo: false },
    { name: 'Teams', logo: 'https://img.icons8.com/color/48/microsoft-teams.png', isInvertLogo: false },
    { name: 'Calendar Management', logo: 'https://img.icons8.com/color/48/calendar.png', isInvertLogo: false },
    { name: 'File Organization', logo: 'https://img.icons8.com/fluency/48/folder-invoices.png', isInvertLogo: false },
    { name: 'Basic Reporting', logo: 'https://img.icons8.com/color/48/document.png', isInvertLogo: false }
  ];

}

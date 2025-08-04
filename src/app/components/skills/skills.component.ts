import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  dataSciences = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'R', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/r/r-original.svg', isInvertLogo: false },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/pandas/pandas-original.svg', isInvertLogo: false },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/numpy/numpy-original.svg', isInvertLogo: false },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jupyter/jupyter-original.svg', isInvertLogo: false },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tensorflow/tensorflow-original.svg', isInvertLogo: false },
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/matplotlib/matplotlib-original.svg', isInvertLogo: false },
    { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', isInvertLogo: false }
  ];

  programmings = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'R', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/r/r-original.svg', isInvertLogo: false },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false }
  ];

  databases = [
    { name: 'MS SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', isInvertLogo: false },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false },
    { name: 'Excel', logo: 'https://img.icons8.com/color/48/microsoft-excel-2019.png', isInvertLogo: false },
    { name: 'Power BI', logo: 'https://img.icons8.com/color/48/power-bi.png', isInvertLogo: false },
    { name: 'Tableau', logo: 'https://img.icons8.com/color/48/tableau-software.png', isInvertLogo: false },
    { name: 'Google Analytics', logo: 'https://img.icons8.com/color/48/google-analytics.png', isInvertLogo: false }
  ];

  adminTools = [
    { name: 'Microsoft Office', logo: 'https://img.icons8.com/color/48/microsoft-office-2019.png', isInvertLogo: false },
    { name: 'Project Management', logo: 'https://img.icons8.com/color/48/project-management.png', isInvertLogo: false },
    { name: 'Slack', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/slack/slack-original.svg', isInvertLogo: false },
    { name: 'Teams', logo: 'https://img.icons8.com/color/48/microsoft-teams.png', isInvertLogo: false },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/trello/trello-original.svg', isInvertLogo: false },
    { name: 'Calendar Management', logo: 'https://img.icons8.com/color/48/calendar.png', isInvertLogo: false },
    { name: 'Document Processing', logo: 'https://img.icons8.com/color/48/document.png', isInvertLogo: false },
    { name: 'Data Entry', logo: 'https://img.icons8.com/color/48/data-configuration.png', isInvertLogo: false }
  ];

}

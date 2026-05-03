const events = [
    // Winter Vacation
    { name: "Winter Vacation", start: "2025-12-15", end: "2026-01-11", type: "holiday" },
    
    // Spring / Even Semester
    { name: "Classes Begin", start: "2026-01-12", end: "2026-01-12", type: "academic" },
    { name: "Republic Day", start: "2026-01-26", end: "2026-01-26", type: "holiday" },
    { name: "Industry Academia Week", start: "2026-02-23", end: "2026-02-27", type: "academic" },
    { name: "Mid-Semester Break", start: "2026-03-02", end: "2026-03-06", type: "academic" },
    { name: "Holi", start: "2026-03-04", end: "2026-03-04", type: "holiday" },
    { name: "Mid-Term Examination", start: "2026-03-10", end: "2026-03-14", type: "exam" },
    { name: "Id-ul-Fitr", start: "2026-03-21", end: "2026-03-21", type: "holiday" },
    { name: "Ram Navami", start: "2026-03-26", end: "2026-03-26", type: "holiday" },
    { name: "Mahavir Jayanti", start: "2026-03-31", end: "2026-03-31", type: "holiday" },
    { name: "Good Friday", start: "2026-04-03", end: "2026-04-03", type: "holiday" },
    { name: "Feedback Form Filling", start: "2026-04-06", end: "2026-04-06", type: "academic" },
    { name: "Budha Purnima", start: "2026-05-01", end: "2026-05-01", type: "holiday" },
    { name: "Classes End", start: "2026-05-08", end: "2026-05-08", type: "academic" },
    { name: "End-Term Examination", start: "2026-05-13", end: "2026-05-23", type: "exam" },
    { name: "Id-ul-Zuha (Bakrid)", start: "2026-05-27", end: "2026-05-27", type: "holiday" },
    
    // Summer Vacation
    { name: "Summer Break Starts", start: "2026-05-29", end: "2026-05-29", type: "academic" },
    { name: "Summer Vacation", start: "2026-05-30", end: "2026-07-31", type: "holiday" },
    
    { name: "Reappear Examination", start: "2026-06-09", end: "2026-06-12", type: "exam" },
    
    // Autumn / Odd Semester Highlights (Mock)
    { name: "Independence Day", start: "2026-08-15", end: "2026-08-15", type: "holiday" },
    { name: "Gandhi Jayanti", start: "2026-10-02", end: "2026-10-02", type: "holiday" },
    { name: "Dussehra", start: "2026-10-18", end: "2026-10-18", type: "holiday" },
    { name: "Diwali", start: "2026-11-08", end: "2026-11-08", type: "holiday" },
    { name: "Next Winter Vacation", start: "2026-12-15", end: "2027-01-10", type: "holiday" }
];

const syllabusData = {
    sem1: [
        { code: "OR2301", title: "Orientation", credits: 1 },
        { code: "OR2302", title: "Introduction to Discipline Engineering", credits: 1 },
        { code: "MA2301", title: "Calculus", credits: 4 },
        { code: "PY2302", title: "Mechanics and Optics", credits: 4 },
        { code: "GS2301", title: "Introduction to Environmental Sciences", credits: 1 },
        { code: "HS2351", title: "Communication Skills", credits: 3 },
        { code: "ES2301", title: "Introduction to Computer Programming", credits: 4 },
        { code: "ES2306", title: "Strength of Materials", credits: 4 }
    ],
    sem2: [
        { code: "MA2302", title: "Linear Algebra, Differential Equations and Vector Calculus", credits: 4 },
        { code: "CH2302", title: "Applied Chemistry - II (Civil & Production)", credits: 4 },
        { code: "ES2302", title: "Engineering Drawings with CAD Software", credits: 4 },
        { code: "GS2302", title: "Universal Human Values", credits: 1 },
        { code: "ES2303", title: "Skill Development Workshop", credits: 2 },
        { code: "ES2307", title: "Introduction to Product Design", credits: 2 },
        { code: "ES2304", title: "Introduction to Mechatronics", credits: 4 }
    ],
    sem3: [
        { code: "CEN3001", title: "Geo-informatics", credits: 4 },
        { code: "CEN3002", title: "Structural Analysis – I", credits: 4 },
        { code: "CEN3003", title: "Fluid Mechanics", credits: 4 },
        { code: "CEN3004", title: "Building Material and Building Construction", credits: 4 },
        { code: "CEN3005", title: "Transportation Engineering", credits: 4 }
    ],
    sem4: [
        { code: "HSM-II", title: "HSM – II", credits: 3 },
        { code: "CEN4001", title: "Design of concrete structure-I", credits: 4 },
        { code: "CEN4002", title: "Structural analysis – II", credits: 3 },
        { code: "CEN4003", title: "Soil Mechanics – T&P", credits: 4 },
        { code: "CEN4004", title: "Irrigation Engineering & Open Channel Hydraulics", credits: 3 },
        { code: "CEN4005", title: "Environmental Engineering – I", credits: 3 },
        { code: "CEN4006", title: "Railway, Airport & Tunnel Engineering", credits: 3 }
    ],
    sem5: [
        { code: "CEN5001", title: "Design of steel structure", credits: 3 },
        { code: "CEN5002", title: "Design of concrete structures – II", credits: 3 },
        { code: "CEN5003", title: "Environmental Engineering - II", credits: 4 },
        { code: "CEN5004", title: "Hydrology and design of Hydraulic Structures", credits: 3 },
        { code: "CEN5005", title: "Foundation Engineering", credits: 3 },
        { code: "CEP5101", title: "Minor Project", credits: 4 }
    ],
    sem6: [
        { code: "---", title: "OPTION 1: INTERNSHIP", credits: "-" },
        { code: "CEN6001", title: "Internship Part-I", credits: 6 },
        { code: "CEN6002", title: "Internship Part-II", credits: 2 },
        { code: "CEN6003", title: "Internship Part-III", credits: 4 },
        { code: "---", title: "OPTION 2: COURSE WORK", credits: "-", inCreditSum: false },
        { code: "CEE1012/16/19/21", title: "Deptt. Elective Course-V", credits: 4, inCreditSum: false },
        { code: "CEO1001", title: "Disaster Management", credits: 4, inCreditSum: false },
        { code: "CEP6001", title: "Project Work", credits: 4, inCreditSum: false }
    ],
    sem7: [
        { code: "HSM-IV", title: "HSM – IV", credits: 3 },
        { code: "CEE1005-10", title: "Departmental Elective Course – I", credits: 4 },
        { code: "CEE1011-15", title: "Departmental Elective Course – II", credits: 4 },
        { code: "CEO1001", title: "Disaster Management", credits: 4 },
        { code: "CEO1002", title: "Green Buildings", credits: 4 },
        { code: "CEP7001", title: "Major Project – I", credits: 4 }
    ],
    sem8: [
        { code: "HSM-III", title: "HSM – III", credits: 3 },
        { code: "CEE1001-02, 16-19", title: "Departmental Elective Course – III", credits: 4 },
        { code: "CEE1003-04, 20-23", title: "Departmental Elective Course – IV", credits: 4 },
        { code: "CEO1003", title: "Clean Technology", credits: 4 },
        { code: "PROF-1", title: "Proficiency – I", credits: 2 },
        { code: "CEP8001", title: "Major Project – II", credits: 4 }
    ]
};

let currentYear = 2026;
let currentSemester = 'sem1';

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initSyllabusTabs();
    renderCalendar();
    renderSyllabus();
    updateCounters();
    
    document.getElementById("prev-year").addEventListener("click", () => {
        currentYear--;
        renderCalendar();
    });
    
    document.getElementById("next-year").addEventListener("click", () => {
        currentYear++;
        renderCalendar();
    });
});

function initNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const views = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active states
            menuItems.forEach(m => m.classList.remove('active'));
            item.classList.add('active');
            
            // Show selected view
            const tab = item.getAttribute('data-tab');
            views.forEach(v => v.classList.remove('active'));
            document.getElementById(`${tab}-view`).classList.add('active');
            
            // Update header
            if (tab === 'calendar') {
                pageTitle.textContent = "Academic Calendar";
                pageSubtitle.textContent = "Interactive schedule for 2026";
            } else if (tab === 'syllabus') {
                pageTitle.textContent = "Civil Engineering Syllabus";
                pageSubtitle.textContent = "Official PEC Curriculum (Sem 1 - 8)";
            }
        });
    });
}

function initSyllabusTabs() {
    const semTabs = document.querySelectorAll('.syllabus-tab');
    
    semTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            semTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSemester = tab.getAttribute('data-sem');
            renderSyllabus();
        });
    });
}

function updateCounters() {
    const today = new Date();
    today.setHours(0,0,0,0);
    
    // Find first exam
    const exams = events.filter(e => e.type === 'exam' && new Date(e.start) >= today);
    exams.sort((a,b) => new Date(a.start) - new Date(b.start));
    
    const examEl = document.getElementById('days-to-exam');
    if (examEl) {
        if (exams.length > 0) {
            const nextExamDate = new Date(exams[0].start);
            nextExamDate.setHours(0,0,0,0);
            const diffTime = nextExamDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            examEl.textContent = diffDays;
        } else {
            examEl.textContent = "0";
        }
    }
    
    // Find sem over (last exam + 1)
    const semEndEl = document.getElementById('days-to-sem-end');
    if (semEndEl) {
        const semEnds = events.filter(e => e.name === 'End-Term Examination');
        if (semEnds.length > 0) {
            const semEndDate = new Date(semEnds[0].end);
            semEndDate.setHours(0,0,0,0);
            semEndDate.setDate(semEndDate.getDate() + 1); // last exam + 1
            
            const diffTime = semEndDate - today;
            if (diffTime >= 0) {
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                semEndEl.textContent = diffDays;
            } else {
                semEndEl.textContent = "0";
            }
        } else {
            semEndEl.textContent = "0";
        }
    }
}

function getEventsForDate(dateStr) {
    return events.filter(e => {
        return dateStr >= e.start && dateStr <= e.end;
    });
}

function formatDateStr(year, month, day) {
    const m = (month + 1).toString().padStart(2, '0');
    const d = day.toString().padStart(2, '0');
    return `${year}-${m}-${d}`;
}

function renderCalendar() {
    const yearGrid = document.getElementById("calendar-year-grid");
    const yearText = document.getElementById("current-year-text");
    
    yearText.textContent = currentYear;
    yearGrid.innerHTML = '';
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const todayStr = formatDateStr(today.getFullYear(), today.getMonth(), today.getDate());
    
    for (let month = 0; month < 12; month++) {
        const monthContainer = document.createElement('div');
        monthContainer.classList.add('month-container');
        
        const monthHeader = document.createElement('div');
        monthHeader.classList.add('month-header');
        monthHeader.textContent = monthNames[month];
        monthContainer.appendChild(monthHeader);
        
        const weekdaysGrid = document.createElement('div');
        weekdaysGrid.classList.add('calendar-weekdays');
        const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        daysOfWeek.forEach(d => {
            const div = document.createElement('div');
            div.textContent = d;
            weekdaysGrid.appendChild(div);
        });
        monthContainer.appendChild(weekdaysGrid);
        
        const daysContainer = document.createElement('div');
        daysContainer.classList.add('calendar-days');
        
        const firstDay = new Date(currentYear, month, 1).getDay();
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
        
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('day', 'empty');
            daysContainer.appendChild(emptyDiv);
        }
        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            
            const dateStr = formatDateStr(currentYear, month, i);
            const dayEvents = [...getEventsForDate(dateStr)];
            
            const dateObj = new Date(currentYear, month, i);
            const dayOfWeek = dateObj.getDay();
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                const isHolidayAlready = dayEvents.some(e => e.type === 'holiday');
                if (!isHolidayAlready) {
                    dayEvents.push({ name: "Weekend", start: dateStr, end: dateStr, type: "holiday" });
                }
            }
            
            if (dateStr === todayStr) {
                dayDiv.classList.add('today');
            }
            
            const numSpan = document.createElement('span');
            numSpan.classList.add('date-num');
            numSpan.textContent = i;
            dayDiv.appendChild(numSpan);
            
            if (dayEvents.length > 0) {
                const hasExam = dayEvents.some(e => e.type === 'exam');
                const hasHoliday = dayEvents.some(e => e.type === 'holiday');
                const hasAcademic = dayEvents.some(e => e.type === 'academic');
                
                if (hasExam) dayDiv.classList.add('has-exam');
                else if (hasHoliday) dayDiv.classList.add('has-holiday');
                else if (hasAcademic) dayDiv.classList.add('has-academic');
                
                const markerDiv = document.createElement('div');
                markerDiv.classList.add('day-marker');
                dayDiv.appendChild(markerDiv);
            }
            
            dayDiv.addEventListener('click', () => {
                document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
                dayDiv.classList.add('selected');
                showEventDetails(dateStr, dayEvents);
            });
            
            daysContainer.appendChild(dayDiv);
        }
        
        monthContainer.appendChild(daysContainer);
        yearGrid.appendChild(monthContainer);
    }
}

function showEventDetails(dateStr, dayEvents) {
    const infoContainer = document.getElementById("selected-date-info");
    
    const dateObj = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    let html = `<h4>${formattedDate}</h4>`;
    
    if (dayEvents.length === 0) {
        html += `<p class="instruction-text" style="margin-top: 1rem;">No events scheduled for this day.</p>`;
    } else {
        html += `<div style="margin-top: 1rem;">`;
        dayEvents.forEach(e => {
            let icon = 'bx-calendar-event';
            if (e.type === 'exam') icon = 'bx-edit-alt';
            if (e.type === 'holiday') icon = 'bx-party';
            
            html += `
                <div class="event-card ${e.type}">
                    <h4 style="display: flex; align-items: center; gap: 8px;">
                        <i class='bx ${icon}'></i>
                        ${e.name}
                    </h4>
                    <p style="text-transform: capitalize; margin-top: 4px;">${e.type} Event</p>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    infoContainer.innerHTML = html;
}

function renderSyllabus() {
    const container = document.getElementById("syllabus-container");
    const courses = syllabusData[currentSemester] || [];
    
    let totalCredits = 0;
    
    let html = `
        <div class="syllabus-table-container">
            <table class="syllabus-table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    if (courses.length === 0) {
        html += `
            <tr>
                <td colspan="3" style="text-align:center; padding: 2rem;">No courses available for this selection.</td>
            </tr>
        `;
    } else {
        courses.forEach(course => {
            if (course.inCreditSum !== false && !isNaN(parseInt(course.credits))) {
                totalCredits += parseInt(course.credits);
            }
            
            let rowStyle = course.code === "---" ? 'style="background-color: var(--primary-light); font-weight: bold;"' : '';
            
            html += `
                <tr ${rowStyle}>
                    <td class="code-col">${course.code}</td>
                    <td>${course.title}</td>
                    <td style="font-weight: 600;">${course.credits}</td>
                </tr>
            `;
        });
    }
    
    html += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" style="text-align: right; font-weight: 700; color: var(--text-main);">Total Credits:</td>
                        <td style="font-weight: 700; color: var(--primary); font-size: 1.1rem;">${totalCredits}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `;
    
    container.innerHTML = html;
}

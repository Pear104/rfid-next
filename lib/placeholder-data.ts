const admin = {
  username: "abcde",
  password: "12345",
};

const updateRFID = {
  id: 1,
  uid: "",
  isUpdated: true,
};

const lecturer = [
  {
    id: "dunglt",
    name: "Lê Thế Dũng",
  },
  {
    id: "taitv",
    name: "Trần Văn Tài",
  },
  {
    id: "hungnd",
    name: "Nguyễn Đức Hùng",
  },
  {
    id: "toidt",
    name: "Đỗ Tấn Tới",
  },
];

const classes = [
  {
    id: "SE1801",
  },
  {
    id: "SE1802",
  },
  {
    id: "SE1803",
  },
];

const subject = [
  {
    id: "IOT102",
    name: "Internet of Things",
  },
  {
    id: "CSI105",
    name: "Introduction to Computer Science",
  },
  {
    id: "LAB211",
    name: "OOP with Java Lab",
  },
  {
    id: "SWE201c",
    name: "Introduction to Software Engineering",
  },
];

const student = [
  {
    id: "SE001",
    uid: "SE001",
    name: "Lê Thế Trường",
  },
  {
    id: "SE002",
    uid: "SE002",
    name: "Nguyễn Trung Hưng",
  },
  {
    id: "SE003",
    uid: "SE003",
    name: "Võ Đỗ Quang Dương",
  },
  {
    id: "SE004",
    uid: "SE004",
    name: "Tạ Gia Nhật Minh",
  },
  {
    id: "SE005",
    uid: "SE005",
    name: "Đỗ Long Ánh",
  },
  {
    id: "SE006",
    uid: "SE006",
    name: "Trần Lê Huy",
  },
  {
    id: "SE007",
    uid: "SE007",
    name: "Đỗ Hồng Quân",
  },
  {
    id: "SE008",
    uid: "SE008",
    name: "Huỳnh Võ Tấn Phước",
  },
  {
    id: "SE009",
    uid: "SE009",
    name: "Nguyễn Thanh Hải",
  },
  {
    id: "SE010",
    uid: "SE010",
    name: "Hoàng Lê Công Thành",
  },
  {
    id: "SE011",
    uid: "SE011",
    name: "Vũ Thành Nam",
  },
  {
    id: "SE012",
    uid: "SE012",
    name: "Bùi Tuấn Thành",
  },
  {
    id: "SE013",
    uid: "SE013",
    name: "Hoàng Ngọc Thức",
  },
  {
    id: "SE014",
    uid: "SE014",
    name: "Trần Đăng Quốc Đạt",
  },
  {
    id: "SE015",
    uid: "SE015",
    name: "Tạ Hoàng Tân",
  },
  {
    id: "SE016",
    uid: "SE016",
    name: "Võ Hoàng Long",
  },
  {
    id: "SE017",
    uid: "SE017",
    name: "Lê Trần Minh Đạt",
  },
  {
    id: "SE018",
    uid: "SE018",
    name: "Trịnh Đăng Khôi",
  },
  {
    id: "SE019",
    uid: "SE019",
    name: "Võ Trọng Nhân",
  },
  {
    id: "SE020",
    uid: "SE020",
    name: "Lâm Quang Hưng",
  },
];

const classInfo = [
  {
    lecturerId: "dunglt",
    classId: "SE1801",
    subjectId: "IOT102",
    slotOrder: 1,
  },
  {
    lecturerId: "toidt",
    classId: "SE1801",
    subjectId: "SWE201c",
    slotOrder: 2,
  },
  {
    lecturerId: "hungnd",
    classId: "SE1801",
    subjectId: "LAB211",
    slotOrder: 1,
  },
  {
    lecturerId: "taitv",
    classId: "SE1802",
    subjectId: "IOT102",
    slotOrder: 1,
  },
  {
    lecturerId: "dunglt",
    classId: "SE1802",
    subjectId: "CSI105",
    slotOrder: 2,
  },
  {
    lecturerId: "hungnd",
    classId: "SE1803",
    subjectId: "SWE201c",
    slotOrder: 1,
  },
  {
    lecturerId: "toidt",
    classId: "SE1803",
    subjectId: "CSI105",
    slotOrder: 3,
  },
  {
    lecturerId: "taitv",
    classId: "SE1803",
    subjectId: "LAB211",
    slotOrder: 2,
  },
];

const attendance = [
  {
    classInfoId: 1,
    section: 1,
    studentId: "SE001",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 1,
    section: 1,
    studentId: "SE002",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 1,
    section: 1,
    studentId: "SE003",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 1,
    section: 2,
    studentId: "SE001",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 1,
    section: 2,
    studentId: "SE002",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 1,
    section: 2,
    studentId: "SE003",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 1,
    studentId: "SE004",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 1,
    studentId: "SE005",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 1,
    studentId: "SE006",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 2,
    studentId: "SE004",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 2,
    studentId: "SE005",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 2,
    section: 2,
    studentId: "SE006",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 1,
    studentId: "SE007",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 1,
    studentId: "SE008",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 1,
    studentId: "SE009",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 2,
    studentId: "SE007",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 2,
    studentId: "SE008",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 3,
    section: 2,
    studentId: "SE009",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 1,
    studentId: "SE010",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 1,
    studentId: "SE011",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 1,
    studentId: "SE012",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 2,
    studentId: "SE010",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 2,
    studentId: "SE011",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 4,
    section: 2,
    studentId: "SE012",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 1,
    studentId: "SE013",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 1,
    studentId: "SE014",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 1,
    studentId: "SE015",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 2,
    studentId: "SE013",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 2,
    studentId: "SE014",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 5,
    section: 2,
    studentId: "SE015",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 1,
    studentId: "SE016",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 1,
    studentId: "SE017",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 1,
    studentId: "SE018",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 2,
    studentId: "SE016",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 2,
    studentId: "SE017",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 6,
    section: 2,
    studentId: "SE018",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 1,
    studentId: "SE019",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 1,
    studentId: "SE020",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 1,
    studentId: "SE007",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 2,
    studentId: "SE019",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 2,
    studentId: "SE020",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 7,
    section: 2,
    studentId: "SE007",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 1,
    studentId: "SE001",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 1,
    studentId: "SE002",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 1,
    studentId: "SE003",
    date: "22/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 2,
    studentId: "SE001",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 2,
    studentId: "SE002",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
  {
    classInfoId: 8,
    section: 2,
    studentId: "SE003",
    date: "23/02/2024",
    attendance: "FUTURE",
  },
];

export {
  admin,
  lecturer,
  classes,
  subject,
  student,
  classInfo,
  attendance,
  updateRFID,
};

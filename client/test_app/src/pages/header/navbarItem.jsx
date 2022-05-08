const HomePage = "/";
const ExamPage = "/exam";
const ManualDocumentPage = "/manual-document";
const ContactsPage = "#";
const HelpPage = "#";

export const navItems = [
    {
      id: 0,
      title: 'Trang chủ',
      url: HomePage,
      cName: 'nav-links',
      submenu: []
    },
    {
      id: 1,
      title: 'Thi THPTQG',
      url: ExamPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Toán học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Vật lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Hóa học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Ngữ văn',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Địa lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Lịch sử',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'GDCD',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tiếng Anh',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 2,
      title: 'Tạo đề thi',
      url: ManualDocumentPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Tạo đề Toán học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Vật lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Hóa học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Ngữ văn',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Địa lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Lịch sử',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề GDCD',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo đề Tiếng Anh',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 3,
      title: 'Tài liệu',
      url: ContactsPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Toán học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Vật lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Hóa học',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Ngữ văn',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Địa lý',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Lịch sử',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'GDCD',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tiếng Anh',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 4,
      title: 'Hướng dẫn',
      url: HelpPage,
      cName: 'nav-links',
      submenu: [
        {
            title: 'Thi trắc nghiệm',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tạo bài thi',
            url: "#",
            cName: 'subitem-link'
        },
        {
            title: 'Tra cứu kết quả',
            url: "#",
            cName: 'subitem-link'
        },
      ]
    },
    {
      id: 5,
      title: 'Đăng nhập',
      url: '#',
      cName: 'nav-links-button',
      submenu: []
    },
    {
      id: 6,
      title: 'Đăng ký',
      url: '#',
      cName: 'nav-links-button',
      submenu: []
    },
]


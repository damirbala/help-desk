// app/employees/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
    ChevronRight, 
    Edit3, 
    Trash2, 
    History as HistoryIcon, 
    Mail, 
    Phone, 
    Briefcase, 
    UserCircle2, 
    KeyRound,
    ChevronLeft // Added for breadcrumbs
} from 'lucide-react';

interface EmployeeDetailPageProps {
  params: { id: string };
}

const mockEmployeeDetail = {
  name: 'Иванов Иван Иванович',
  role: 'Инженер',
  department: 'Отдел технического обслуживания',
  email: 'i.ivanov@example.com',
  phone: '+7 (900) 123-45-67',
  status: 'Работает',
};

const EmployeeDetailPage: React.FC<EmployeeDetailPageProps> = ({ params }) => {
  const employee = mockEmployeeDetail;

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
        <div className="w-full p-6 bg-white rounded-md border border-[#EBEBEA] shadow-sm mt-0 grid grid-rows-[auto_1fr] gap-y-6">
          
          <div className="bg-white py-3 border-b border-[#EBEBEA] grid grid-flow-col auto-cols-max items-center gap-x-2 text-sm">
            <Link href="/employees" className="text-[#2383E2] hover:underline grid grid-flow-col auto-cols-max items-center gap-x-1">
              <ChevronLeft className="w-4 h-4" />
              Назад
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/" className="text-[#2383E2] hover:underline">
              Главная
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/employees" className="text-[#2383E2] hover:underline">
              Сотрудники
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <span className="text-[#6B6B6B]">{employee.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-6">
            <div className="flex flex-col space-y-6">
              <div className="mb-6"> {/* Employee Header Part 1 */}
                <div className="flex items-start">
                  <UserCircle2 className="h-16 w-16 text-gray-300 mr-6" />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h1 className="text-2xl font-semibold text-[#37352F]">
                        {employee.name}
                      </h1>
                      <Button variant="ghost" size="icon" className="text-[#6B6B6B] hover:bg-green-600 hover:text-white h-7 w-7">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-600">{employee.role} - {employee.department}</p>
                    <p className={`mt-1 text-xs font-medium inline-flex items-center px-2 py-0.5 rounded-full ${employee.status === 'Работает' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {employee.status}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm pt-6 border-t border-gray-200"> {/* Employee Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-gray-500 mb-0.5 flex items-center"><Mail className="h-4 w-4 mr-2 text-gray-400"/>Email:</p>
                    <p className="text-base text-gray-800">{employee.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5 flex items-center"><Phone className="h-4 w-4 mr-2 text-gray-400"/>Телефон:</p>
                    <p className="text-base text-gray-800">{employee.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5 flex items-center"><Briefcase className="h-4 w-4 mr-2 text-gray-400"/>Должность:</p>
                    <p className="text-base text-gray-800">{employee.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5 flex items-center"><KeyRound className="h-4 w-4 mr-2 text-gray-400"/>Роль в системе:</p>
                    <p className="text-base text-gray-800">Инженер HelpDesk</p>
                  </div>
                </div>
              </div>

              <div className="text-sm"> {/* Notes/Comments Section */}
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 mr-2 text-sm">Заметки/Комментарии:</p>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                    <Edit3 className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-700 min-h-[60px]">
                  <p>Placeholder for employee notes or comments.</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="sticky top-6 space-y-4">
                <div className="grid grid-flow-col auto-cols-max items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#37352F]">Действия</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">Редактировать сотрудника</Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">Уволить сотрудника</Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <HistoryIcon className="h-4 w-4 mr-2" />
                    История изменений
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetailPage;
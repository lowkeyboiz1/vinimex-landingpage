import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ChartLine, Book, Thermometer, Droplet, CloudSun, Wind, Bug, IdCard, Award, Leaf, Tractor } from 'lucide-react'
import TitleBadge from '../TitleBadge'
import Image from 'next/image'

const DigitalFarmerProfile = () => {
  return (
    <section id='digital-profile' className='flex min-h-dvh items-center justify-center bg-gradient-to-b from-white to-green-50 py-16 md:py-24'>
      <div className='container mx-auto'>
        <div className='mb-10 text-center md:mb-16'>
          <TitleBadge title='Tính năng 2' className='bg-[#D2E4D1] text-[#4F7A3C]' />
          <h3 className='mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl'>Hồ sơ Nông dân Số & Nhật ký Sản xuất</h3>
          <p className='mx-auto max-w-3xl text-base text-gray-700 md:text-lg lg:text-xl'>
            Hệ thống hồ sơ điện tử toàn diện giúp nông dân theo dõi toàn bộ quá trình sản xuất, từ gieo trồng đến thu hoạch, tạo nên cơ sở dữ liệu quý giá cho việc phân tích và cải thiện năng suất.
          </p>
        </div>
        <div className='grid items-start gap-6 lg:grid-cols-2 lg:gap-8'>
          <div className='h-full rounded-xl bg-white p-5 shadow-2xl transition-all duration-300 hover:shadow-green-100 md:p-6'>
            <div className='flex h-full flex-col overflow-hidden rounded-lg border border-gray-200'>
              <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 p-4 text-white'>
                <h4 className='text-base font-bold md:text-lg'>Hồ sơ Nông dân Số</h4>
                <IdCard className='h-5 w-5 md:h-6 md:w-6' />
              </div>
              <div className='flex-grow bg-white p-5 md:p-6'>
                <div className='mb-6 flex flex-col sm:flex-row sm:items-center md:mb-8'>
                  <div className='mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-green-100 shadow-md sm:mx-0 sm:mr-6 sm:mb-0 md:h-28 md:w-28'>
                    <img src='https://public.readdy.ai/ai/img_res/ceb21757191bd7cf820633c45d69a5dd.jpg' alt='Nông dân Việt Nam' className='h-full w-full object-cover object-top' />
                  </div>
                  <div className='text-center sm:text-left'>
                    <h5 className='mb-2 text-xl font-bold md:text-2xl'>Nguyễn Văn Thành</h5>
                    <p className='mb-2 text-gray-600 md:text-lg'>Nông dân trồng lúa</p>
                    <div className='flex items-center justify-center sm:justify-start'>
                      <MapPin className='mr-2 h-4 w-4 text-green-600 md:h-5 md:w-5' />
                      <span className='text-sm text-gray-600 md:text-base'>Đồng bằng sông Cửu Long</span>
                    </div>
                  </div>
                </div>
                <div className='mb-6 grid grid-cols-3 gap-3 rounded-lg bg-green-50 p-4 shadow-inner md:mb-8 md:gap-4 md:p-5'>
                  <div className='text-center'>
                    <p className='mb-1 text-xs text-gray-500 md:text-sm'>Diện tích</p>
                    <p className='text-base font-bold text-green-700 md:text-lg'>2.5 hecta</p>
                  </div>
                  <div className='border-x border-green-200 text-center'>
                    <p className='mb-1 text-xs text-gray-500 md:text-sm'>Kinh nghiệm</p>
                    <p className='text-base font-bold text-green-700 md:text-lg'>15 năm</p>
                  </div>
                  <div className='text-center'>
                    <p className='mb-1 text-xs text-gray-500 md:text-sm'>Năng suất</p>
                    <p className='text-base font-bold text-green-700 md:text-lg'>7.2 tấn/ha</p>
                  </div>
                </div>
                <div className='mb-6 md:mb-8'>
                  <h5 className='mb-3 flex items-center text-base font-bold md:mb-4 md:text-lg'>
                    <Tractor className='mr-2 h-4 w-4 text-green-600 md:h-5 md:w-5' />
                    Thông tin canh tác
                  </h5>
                  <div className='grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2 md:gap-5'>
                    <div>
                      <p className='text-xs text-gray-500 md:text-sm'>Loại cây trồng</p>
                      <p className='text-sm font-medium md:text-base'>Lúa, Rau màu</p>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 md:text-sm'>Giống lúa chính</p>
                      <p className='text-sm font-medium md:text-base'>IR50404, OM5451</p>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 md:text-sm'>Phương pháp</p>
                      <p className='text-sm font-medium md:text-base'>Canh tác hữu cơ</p>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500 md:text-sm'>Chứng nhận</p>
                      <div className='flex items-center'>
                        <p className='text-sm font-medium md:text-base'>VietGAP</p>
                        <Award className='ml-2 h-4 w-4 text-green-600' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <h5 className='mb-3 flex items-center text-base font-bold md:mb-4 md:text-lg'>
                    <ChartLine className='mr-2 h-4 w-4 text-green-600 md:h-5 md:w-5' />
                    Thống kê mùa vụ
                  </h5>
                  <div className='mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4'>
                    <div className='rounded-lg bg-blue-50 p-3 text-center shadow-sm transition-transform hover:scale-105 md:p-4'>
                      <p className='text-xs text-gray-600 md:text-sm'>Vụ Đông Xuân</p>
                      <p className='text-base font-bold text-blue-700 md:text-lg'>7.5 tấn/ha</p>
                    </div>
                    <div className='rounded-lg bg-amber-50 p-3 text-center shadow-sm transition-transform hover:scale-105 md:p-4'>
                      <p className='text-xs text-gray-600 md:text-sm'>Vụ Hè Thu</p>
                      <p className='text-base font-bold text-amber-700 md:text-lg'>6.8 tấn/ha</p>
                    </div>
                    <div className='rounded-lg bg-emerald-50 p-3 text-center shadow-sm transition-transform hover:scale-105 md:p-4'>
                      <p className='text-xs text-gray-600 md:text-sm'>Vụ Thu Đông</p>
                      <p className='text-base font-bold text-emerald-700 md:text-lg'>7.2 tấn/ha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full rounded-xl bg-white p-5 shadow-2xl transition-all duration-300 hover:shadow-green-100 md:p-6'>
            <div className='flex h-full flex-col overflow-hidden rounded-lg border border-gray-200'>
              <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 p-4 text-white'>
                <h4 className='text-base font-bold md:text-lg'>Nhật ký Sản xuất Điện tử</h4>
                <Book className='h-5 w-5 md:h-6 md:w-6' />
              </div>
              <div className='flex-grow bg-white p-5 md:p-6'>
                <div className='mb-6 flex items-center justify-between md:mb-8'>
                  <div className='flex items-center'>
                    <Calendar className='mr-3 h-5 w-5 text-green-600 md:h-6 md:w-6' />
                    <h5 className='text-base font-bold md:text-lg'>Vụ Đông Xuân 2025</h5>
                  </div>
                  <div>
                    <Badge className='bg-green-100 px-3 py-1 text-sm font-medium text-green-800 md:text-base'>Đang canh tác</Badge>
                  </div>
                </div>
                <div className='relative mb-4 md:mb-6'>
                  <div className='mb-6 md:mb-8'>
                    <div className='mb-2 flex justify-between'>
                      <span className='flex items-center text-sm font-medium text-green-800 md:text-base'>
                        <Leaf className='mr-2 h-4 w-4' />
                        Gieo trồng
                      </span>
                      <span className='rounded-full bg-green-50 px-3 py-1 text-xs text-gray-700 md:text-sm'>15/03/2025</span>
                    </div>
                    <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-5'>
                      <p className='mb-3 text-sm md:text-base'>Giống lúa IR50404, mật độ 40kg/ha</p>
                      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 md:text-base'>
                        <div className='flex items-center'>
                          <Thermometer className='mr-2 h-4 w-4 text-red-500 md:h-5 md:w-5' />
                          <span>Nhiệt độ: 28°C</span>
                        </div>
                        <div className='flex items-center'>
                          <Droplet className='mr-2 h-4 w-4 text-blue-500 md:h-5 md:w-5' />
                          <span>Độ ẩm: 75%</span>
                        </div>
                      </div>
                      <div className='mt-4 flex gap-3 md:mt-5'>
                        <img
                          src='https://public.readdy.ai/ai/img_res/b1b495cba37f6e92ddb92247b5c9ad34.jpg'
                          alt='Gieo trồng lúa'
                          className='h-16 w-24 rounded-lg object-cover object-top shadow-sm transition-transform hover:scale-105 md:h-20 md:w-32'
                        />
                        <img
                          src='https://public.readdy.ai/ai/img_res/084116159553cefdd886af49d8e1a745.jpg'
                          alt='Nông dân gieo trồng'
                          className='h-16 w-24 rounded-lg object-cover object-top shadow-sm transition-transform hover:scale-105 md:h-20 md:w-32'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mb-6 md:mb-8'>
                    <div className='mb-2 flex justify-between'>
                      <span className='flex items-center text-sm font-medium text-amber-800 md:text-base'>
                        <Leaf className='mr-2 h-4 w-4' />
                        Bón phân
                      </span>
                      <span className='rounded-full bg-amber-50 px-3 py-1 text-xs text-gray-700 md:text-sm'>01/04/2025</span>
                    </div>
                    <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-5'>
                      <p className='mb-3 text-sm md:text-base'>Phân NPK 20-10-10, 150kg/ha</p>
                      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 md:text-base'>
                        <div className='flex items-center'>
                          <CloudSun className='mr-2 h-4 w-4 text-yellow-500 md:h-5 md:w-5' />
                          <span>Thời tiết: Nắng nhẹ</span>
                        </div>
                        <div className='flex items-center'>
                          <Wind className='mr-2 h-4 w-4 text-blue-400 md:h-5 md:w-5' />
                          <span>Gió: Nhẹ</span>
                        </div>
                      </div>
                      <div className='mt-4 flex flex-wrap items-center gap-2 md:mt-5'>
                        <span className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 md:text-sm'>Đúng kỹ thuật</span>
                        <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 md:text-sm'>Tiết kiệm 10%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='mb-2 flex justify-between'>
                      <span className='flex items-center text-sm font-medium text-blue-800 md:text-base'>
                        <Leaf className='mr-2 h-4 w-4' />
                        Phun thuốc
                      </span>
                      <span className='rounded-full bg-blue-50 px-3 py-1 text-xs text-gray-700 md:text-sm'>15/04/2025</span>
                    </div>
                    <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-5'>
                      <p className='mb-3 text-sm md:text-base'>Phòng trừ rầy nâu, 2 lít/ha</p>
                      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 md:text-base'>
                        <div className='flex items-center'>
                          <Bug className='mr-2 h-4 w-4 text-red-500 md:h-5 md:w-5' />
                          <span>Mức độ nhiễm: Nhẹ</span>
                        </div>
                        <div className='flex items-center'>
                          <ChartLine className='mr-2 h-4 w-4 text-green-500 md:h-5 md:w-5' />
                          <span>Thuốc sinh học</span>
                        </div>
                      </div>
                      <div className='mt-4 rounded-lg bg-green-50 p-3 md:mt-5'>
                        <p className='flex items-center text-xs text-gray-700 italic md:text-sm'>
                          <Award className='mr-2 h-4 w-4 text-green-600' />
                          Khuyến nghị AI: Theo dõi thêm 5 ngày, kiểm tra lại mật độ rầy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalFarmerProfile

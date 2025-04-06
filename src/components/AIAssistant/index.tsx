import { Bot, Minimize2, X, Send, User, Image, Mic, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TitleBadge from '../TitleBadge'

export default function AIAssistant() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center px-4 py-16'>
      <div className='container mx-auto'>
        {/* Feature Label */}
        <div className='mb-6 text-center'>
          <TitleBadge title='Tính năng' />
        </div>

        {/* Main Title */}
        <h1 className='mb-2 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl'>Giải pháp toàn diện cho nông nghiệp thông minh</h1>

        {/* Subtitle */}
        <p className='mx-auto mb-12 max-w-3xl text-center text-gray-600 md:text-lg'>
          Vinimex AI cung cấp các công cụ hiện đại giúp người nông dân tối ưu hóa quy trình sản xuất, giảm thiểu rủi ro và tăng giá trị sản phẩm.
        </p>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
          {/* Left Column - Features */}
          <div className='flex flex-col gap-6 lg:gap-8'>
            {/* Feature Label */}
            <div className='w-fit'>
              <TitleBadge title='Tính năng 1' className='w-fit bg-[#D2E4D1] text-green-800' />
            </div>

            {/* Feature Title */}
            <h2 className='text-2xl font-bold text-gray-800 md:text-3xl'>Trợ lý AI Đom Đóm - Người bạn hiểu đất hiểu cây</h2>

            {/* Feature Description */}
            <p className='text-gray-600 md:text-lg'>Trợ lý AI Đom Đóm sử dụng mô hình học máy và dữ liệu nông nghiệp lớn từ Việt Nam, cung cấp tư vấn chính xác và phù hợp.</p>

            {/* Feature List */}
            <div className='mt-2 space-y-5'>
              {/* Feature 1 */}
              <div className='flex items-start gap-4'>
                <div className='mt-1 rounded-full bg-[#D2E4D1] p-2 text-green-800'>
                  <svg className='h-5 w-5 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>Học máy tiên tiến</h3>
                  <p className='text-gray-600'>Sử dụng các thuật toán học máy hiện đại để phân tích và dự đoán các yếu tố ảnh hưởng đến cây trồng.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className='flex items-start gap-4'>
                <div className='mt-1 rounded-full bg-[#D2E4D1] p-2 text-green-800'>
                  <svg className='h-5 w-5 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>Xử lý ngôn ngữ tự nhiên</h3>
                  <p className='text-gray-600'>Hiểu và phản hồi các câu hỏi của người nông dân bằng tiếng Việt một cách tự nhiên và chính xác.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className='flex items-start gap-4'>
                <div className='mt-1 rounded-full bg-[#D2E4D1] p-2 text-green-800'>
                  <svg className='h-5 w-5 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800'>Phân tích dữ liệu thời gian thực</h3>
                  <p className='text-gray-600'>Cập nhật liên tục từ các cảm biến IoT đặt tại ruộng đồng để đưa ra khuyến nghị kịp thời.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Interface */}
          <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl'>
            {/* Chat Header */}
            <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 p-4 text-white'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2'>
                  <Bot className='h-5 w-5' />
                </div>
                <div>
                  <span className='font-medium'>Trợ lý Đom Đóm</span>
                  <div className='flex items-center gap-1 text-xs text-green-100'>
                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-75'></span>
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-green-100'></span>
                    </span>
                    Đang hoạt động
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <button className='rounded-full p-2 transition-colors hover:bg-white/10'>
                  <Minimize2 className='h-4 w-4' />
                </button>
                <button className='rounded-full p-2 transition-colors hover:bg-white/10'>
                  <X className='h-4 w-4' />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent h-[400px] overflow-y-auto bg-gray-50 p-4'>
              {/* Bot Message */}
              <div className='mb-6 flex gap-3'>
                <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-600 p-2'>
                  <Bot className='h-5 w-5 text-white' />
                </div>
                <div className='max-w-[80%] rounded-2xl rounded-tl-none bg-white p-4 shadow-sm'>
                  <p className='text-gray-800'>Xin chào! Tôi là Đom Đóm, trợ lý AI nông nghiệp. Tôi có thể giúp gì cho bạn hôm nay?</p>
                  <span className='mt-1 block text-xs text-gray-500'>10:05 AM</span>
                </div>
              </div>

              {/* User Message */}
              <div className='mb-6 flex justify-end gap-3'>
                <div className='max-w-[80%] rounded-2xl rounded-tr-none bg-green-100 p-4 shadow-sm'>
                  <p className='text-gray-800'>Ruộng lúa của tôi có vẻ không khỏe, lá hơi vàng. Tôi nên làm gì?</p>
                  <span className='mt-1 block text-right text-xs text-gray-500'>10:07 AM</span>
                </div>
                <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 p-2'>
                  <User className='h-5 w-5 text-gray-600' />
                </div>
              </div>

              {/* Bot Response */}
              <div className='mb-4 flex gap-3'>
                <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-600 p-2'>
                  <Bot className='h-5 w-5 text-white' />
                </div>
                <div className='max-w-[80%] rounded-2xl rounded-tl-none bg-white p-4 shadow-sm'>
                  <p className='mb-3 text-gray-800'>Lá lúa vàng có thể do nhiều nguyên nhân: thiếu nước, thiếu dinh dưỡng hoặc sâu bệnh. Tôi cần thêm thông tin:</p>
                  <ul className='space-y-2 text-gray-800'>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-xs'>•</span>
                      <span>Lúa đang ở giai đoạn nào?</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-xs'>•</span>
                      <span>Thời tiết gần đây thế nào?</span>
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-xs'>•</span>
                      <span>Bạn có thể gửi ảnh không?</span>
                    </li>
                  </ul>
                  <span className='mt-2 block text-xs text-gray-500'>10:08 AM</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className='border-t border-gray-200 bg-white p-4'>
              <div className='flex items-center gap-2'>
                <div className='flex gap-2'>
                  <button className='rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100'>
                    <Paperclip className='h-5 w-5' />
                  </button>
                  <button className='rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100'>
                    <Image className='h-5 w-5' />
                  </button>
                  <button className='rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100'>
                    <Mic className='h-5 w-5' />
                  </button>
                </div>
                <input
                  type='text'
                  placeholder='Nhập câu hỏi của bạn...'
                  className='flex-1 rounded-full border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none'
                />
                <button className='rounded-full bg-gradient-to-r from-green-600 to-green-500 p-2.5 text-white transition-all hover:shadow-md'>
                  <Send className='h-5 w-5' />
                </button>
              </div>
              <div className='mt-2 text-center text-xs text-gray-500'>Trợ lý Đom Đóm sẽ trả lời dựa trên dữ liệu nông nghiệp Việt Nam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

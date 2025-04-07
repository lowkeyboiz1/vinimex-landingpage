import { Globe, Camera, FileText, Recycle, Leaf, Droplet, Sun } from 'lucide-react'
import TitleBadge from '../TitleBadge'

export default function GreenEcosystem() {
  const dailyTasks = [
    {
      id: 1,
      title: 'Chụp ảnh ruộng lúa',
      points: 20,
      icon: <Camera className='h-5 w-5 text-purple-600' />,
      iconBg: 'bg-purple-100',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Cập nhật nhật ký',
      points: 15,
      icon: <FileText className='h-5 w-5 text-blue-600' />,
      iconBg: 'bg-blue-100',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Sử dụng phân hữu cơ',
      points: 50,
      icon: <Recycle className='h-5 w-5 text-green-600' />,
      iconBg: 'bg-green-100',
      status: 'pending'
    }
  ]

  const carbonStats = [
    {
      id: 1,
      title: 'Giá trị ước tính',
      value: '1.250.000 đ',
      bgColor: 'bg-gray-50',
      textColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'Đã quy đổi',
      value: '0.8 tấn CO₂',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Còn lại',
      value: '1.7 tấn CO₂',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ]

  const emissionActivities = [
    {
      id: 1,
      title: 'Canh tác hữu cơ',
      reduction: '0.8 tấn CO₂/năm',
      icon: <Leaf className='h-4 w-4 text-green-600' />,
      iconBg: 'bg-green-100',
      status: 'active'
    },
    {
      id: 2,
      title: 'Quản lý nước thông minh',
      reduction: '0.5 tấn CO₂/năm',
      icon: <Droplet className='h-4 w-4 text-blue-600' />,
      iconBg: 'bg-blue-100',
      status: 'active'
    },
    {
      id: 3,
      title: 'Sử dụng năng lượng mặt trời',
      reduction: '1.2 tấn CO₂/năm',
      icon: <Sun className='h-4 w-4 text-yellow-600' />,
      iconBg: 'bg-yellow-100',
      status: 'inactive'
    }
  ]

  return (
    <section id='green-ecosystem' className='flex min-h-dvh items-center justify-center bg-gradient-to-b from-white to-green-50 px-4 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Feature Label */}
        <div className='mb-6 text-center'>
          <TitleBadge title='Tính năng 4' className='bg-[#D2E4D1] text-green-800' />
        </div>

        {/* Main Title */}
        <h1 className='mb-3 text-center text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl'>Hệ Sinh Thái Xanh & Tín Chỉ Carbon</h1>

        {/* Subtitle */}
        <p className='mx-auto mb-12 max-w-3xl text-center text-gray-600 md:text-lg'>
          Chuyển đổi nông nghiệp bền vững thành trò chơi tương tác, tạo động lực cho nông dân áp dụng phương pháp canh tác xanh và nhận phần thưởng thực tế.
        </p>

        {/* Two Panel Layout */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
          {/* Left Panel - Green Farmer Journey */}
          <div className='overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-green-100'>
            {/* Header */}
            <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 p-4 text-white'>
              <h2 className='text-lg font-semibold md:text-xl'>Hành Trình Nông Dân Xanh</h2>
              <div className='flex items-center gap-2'>
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-white'>
                  <div className='h-3 w-3 rounded-full bg-green-600'></div>
                </div>
                <span className='rounded-full bg-white/20 px-2 py-0.5 text-xs'>Cấp độ 3</span>
              </div>
            </div>

            {/* Farmer Profile */}
            <div className='flex items-center gap-4 p-5'>
              <div className='relative'>
                <img
                  src='https://public.readdy.ai/ai/img_res/ceb21757191bd7cf820633c45d69a5dd.jpg'
                  alt='Farmer Profile'
                  width={80}
                  height={80}
                  className='rounded-full border-4 border-green-100 object-cover shadow-sm'
                />
                <div className='absolute right-0 bottom-0 rounded-full bg-green-500 p-1 shadow-sm'>
                  <Leaf className='h-3 w-3 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-800'>Nguyễn Văn Thành</h3>
                <span className='inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600'>Nông Dân Xanh Tiên Phong</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className='px-5 pb-5'>
              <div className='mb-2 flex justify-between text-sm'>
                <span className='text-gray-600'>Tiến độ cấp độ</span>
                <span className='font-medium text-green-600'>1,250 / 2,000</span>
              </div>
              <div className='h-3 overflow-hidden rounded-full bg-gray-100 shadow-inner'>
                <div className='h-full rounded-full bg-gradient-to-r from-green-500 to-green-400' style={{ width: '62.5%' }}></div>
              </div>
              <div className='mt-2 flex justify-between text-xs text-gray-500'>
                <span>Cấp độ 3</span>
                <span>Cấp độ 4</span>
              </div>
            </div>

            {/* Daily Tasks */}
            <div className='px-5 pb-6'>
              <div className='mb-4 flex items-center gap-2'>
                <div className='flex h-5 w-5 items-center justify-center'>
                  <div className='h-3 w-3 border-2 border-purple-400'></div>
                </div>
                <span className='font-medium text-gray-700'>Nhiệm vụ hàng ngày</span>
              </div>

              <div className='space-y-3'>
                {dailyTasks.map((task) => (
                  <div key={task.id} className='flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100'>
                    <div className='flex items-center gap-3'>
                      <div className={`rounded-lg ${task.iconBg} p-2`}>{task.icon}</div>
                      <div>
                        <div className='font-medium text-gray-800'>{task.title}</div>
                        <div className='text-xs text-green-600'>+{task.points} điểm xanh</div>
                      </div>
                    </div>
                    <button
                      className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                        task.status === 'completed'
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-sm hover:shadow-md'
                          : 'bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 shadow-sm hover:from-gray-300 hover:to-gray-200 hover:shadow-md'
                      }`}
                    >
                      {task.status === 'completed' ? 'Hoàn thành' : 'Thực hiện'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Carbon Credits */}
          <div className='overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-green-100'>
            {/* Header */}
            <div className='flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 p-4 text-white'>
              <h2 className='text-lg font-semibold md:text-xl'>Tín Chỉ Carbon</h2>
              <Globe className='h-5 w-5 md:h-6 md:w-6' />
            </div>

            {/* Carbon Credit Total */}
            <div className='flex items-center justify-between p-5'>
              <div>
                <div className='text-sm text-gray-600'>Tổng tín chỉ carbon tích lũy</div>
                <div className='flex items-end gap-1 text-3xl font-bold text-green-600 md:text-4xl'>
                  2.5
                  <span className='text-sm font-normal'>
                    tấn CO<sub>2</sub>
                  </span>
                </div>
              </div>
              <div className='h-20 w-20'>
                <img src='/certificate.png' alt='Carbon Certificate' width={80} height={80} className='object-contain' />
              </div>
            </div>

            {/* Carbon Credit Stats */}
            <div className='grid grid-cols-3 gap-3 px-5'>
              {carbonStats.map((stat) => (
                <div key={stat.id} className={`rounded-lg ${stat.bgColor} p-3 shadow-sm transition-all hover:shadow-md`}>
                  <div className='mb-1 text-xs text-gray-600'>{stat.title}</div>
                  <div className={`font-semibold ${stat.textColor}`}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Emission Reduction Activities */}
            <div className='p-5'>
              <h3 className='mb-4 font-medium text-gray-800'>Hoạt động giảm phát thải</h3>

              <div className='space-y-3'>
                {emissionActivities.map((activity) => (
                  <div key={activity.id} className='flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100'>
                    <div className='flex items-center gap-3'>
                      <div className={`rounded-full ${activity.iconBg} p-2`}>{activity.icon}</div>
                      <div>
                        <div className='font-medium text-gray-800'>{activity.title}</div>
                        <div className='text-xs text-gray-500'>{activity.reduction}</div>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === 'active' ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-600 shadow-sm' : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 shadow-sm'
                      }`}
                    >
                      {activity.status === 'active' ? 'Đang áp dụng' : 'Chưa áp dụng'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

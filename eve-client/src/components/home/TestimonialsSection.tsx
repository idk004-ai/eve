import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { MdOutlineTimer, MdVerified } from 'react-icons/md';
import { RiCoupon3Line } from 'react-icons/ri';

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Anh Nguyễn Tuấn Quỳnh',
      position: 'CEO Saigon Books',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'Lần trước tôi có việc gấp phải đi công tác, lên mạng tìm đặt vé xe thì tình cờ tìm thấy Vexere. Sau khi tham khảo, tôi quyết định đặt vé và thanh toán. Công nhận rất tiện và nhanh chóng. Chỉ một lúc sau, nhà xe liên hệ xác nhận vé ngay và thông báo thời gian xe dự kiến đón để tôi chuẩn bị. Tôi khá bất ngờ vì nhà xe có thông tin của mình nhanh đến vậy. Chuyến đi hôm đó rất tuyệt. Tôi nhất định sẽ tiếp tục ủng hộ Vexere.'
    },
    {
      id: 2,
      name: 'Shark Phi',
      position: 'Giám đốc BSSC',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      content: 'Các đối tác của Vexere đều là những hãng xe lớn, có uy tín nên tôi hoàn toàn yên tâm khi lựa chọn đặt vé cho bản thân và gia đình. Nhờ hiển thị rõ nhà xe và vị trí chỗ trống trên xe, tôi rất dễ dàng tìm chuyến mình muốn và chỗ mình muốn ngồi. Còn hình thức thanh toán có cả thẻ, ví, tại nhà xe và tốc độ thanh toán thì siêu nhanh, tiết kiệm cho tôi rất nhiều thời gian.'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Khách hàng nói gì về Vexere</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-500">{testimonials[activeTestimonial].position}</p>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
          >
            <FaChevronLeft className="h-5 w-5 text-gray-500" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
          >
            <FaChevronRight className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Nền tảng kết nối người dùng và nhà xe</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">
                <BiWorld size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">2000+ nhà xe chất lượng cao</h4>
              <p className="text-gray-600 text-sm">5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">
                <MdOutlineTimer size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">Đặt vé dễ dàng</h4>
              <p className="text-gray-600 text-sm">Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">
                <MdVerified size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">Chắc chắn có chỗ</h4>
              <p className="text-gray-600 text-sm">Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-3">
                <RiCoupon3Line size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2">Nhiều ưu đãi</h4>
              <p className="text-gray-600 text-sm">Hàng ngàn ưu đãi cực chất độc quyền tại Vexere.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

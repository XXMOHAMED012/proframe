import React from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="order">
      <h2 className="main-title">طلب تصوير</h2>
      <div className="form">
        <div className="container">
          <form
            action="https://formsubmit.co/mohamedkhaled012@yahoo.com"
            method="POST"
          >
            <div className="line">
              <h3>الاسم</h3>
              <input type="text" name="name" required placeholder="اسمك..." />
            </div>
            <div className="line">
              <h3>نوع المناسبة</h3>
              <select name="type" class="categories">
                <option value="أعراس">أعراس</option>
                <option value="معارض ومؤتمرات">معارض ومؤتمرات</option>
                <option value="أفلام">أفلام</option>
                <option value="ورش عمل">ورش عمل</option>
              </select>
            </div>
            <div className="line">
              <h3>تاريخ المناسبة</h3>
              <input
                type="text"
                name="date"
                required
                placeholder="تاريخ مناسبتك..."
              />
            </div>
            <div className="line">
              <h3>موقع المناسبة</h3>
              <select class="categories">
                <option value="الرياض">الرياض</option>
                <option value="مكـة المكرمة">مكـة المكرمة</option>
                <option value="المدينة المنورة">المدينة المنورة</option>
                <option value="القصيم">القصيم</option>
                <option value="المنطقة الشرقية">المنطقة الشرقية</option>
                <option value="عسير">عسير</option>
                <option value="تبــوك">تبــوك</option>
                <option value="حائل">حائل</option>
                <option value="الحدود الشمالية">الحدود الشمالية</option>
                <option value="جازان">جازان</option>
                <option value="نجران">نجران</option>
                <option value="الباحة">الباحة</option>
                <option value="الجـوف">الجـوف</option>
              </select>
            </div>
            <div className="line">
              <h3>رقم الجوال</h3>
              <input
                type="tel"
                name="phone"
                required
                placeholder="9665xxxxxxxx+"
              />
            </div>
            <div className="line">
              <h3>الوصف</h3>
              <textarea
                name="message"
                placeholder=" اكتب الوصف هنا..."
              ></textarea>
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;

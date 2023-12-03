import React from "react";
import { UserIcon, CalendarIcon, TagIcon } from "../Icons";
import { Blog_1 } from "../../assets/Images";

const Card_Blog = () => {
  return (
    <div className="card_blog">
      <div className="card_blog__img">
        <img src={Blog_1} alt="" />
      </div>
      <div className="card_blog__infos">
        <div className="card_blog__infos__info">
          <UserIcon />
          <p>Name</p>
        </div>
        <div className="card_blog__infos__info">
          <CalendarIcon />
          <p>14 Oct 2022</p>
        </div>
        <div className="card_blog__infos__info">
          <TagIcon />
          <p>Wood</p>
        </div>
      </div>
      <div className="card_blog__title">
        <h1>9 tác dụng của trà hoa cúc trong việc bồi bổ sức khoẻ</h1>
        <p>Trà hoa cúc được yêu thích không chỉ vì hương thơm dịu dàng mà còn vì những lợi ích sức khỏe mà nó mang lại. Nó được cho là có tác dụng giúp thư giãn, làm dịu tinh thần, và giúp ngủ ngon. Ngoài ra, hoa cúc chứa các hợp chất chống oxy hóa và kháng viêm, giúp bảo vệ cơ thể khỏi các tác nhân gây hại. Cùng Trà Việt tìm hiểu sâu hơn về các tác dụng của Trà Hoa Cúc nhé.</p>
        <button><p>Read more</p></button>
      </div>
    </div>
  );
};

export default Card_Blog;

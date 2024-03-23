import { Link } from 'react-router-dom';
import DeleteImg from '../assets/delete.png';
import EditImg from '../assets/edit.png';
import { Menu } from '../components';

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src={
            'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
        />
        <div className="user">
          <img
            src={
              'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={'/write?edit=2'}>
              <img src={EditImg} alt={'edit-icon'} />
            </Link>
            <img src={DeleteImg} alt={'delete-icon'} />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel
          asperiores est alias rem enim?
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum
          dolorum ratione animi aspernatur voluptatum consequatur vel, ipsam
          enim accusamus nulla obcaecati nemo nesciunt libero soluta.
          <br />
          <br />
          Veritatis at voluptas ullam labore quaerat fugiat doloribus reiciendis
          quidem maxime soluta quo, odit ipsa temporibus perspiciatis aperiam
          officia alias omnis quis culpa doloremque earum reprehenderit cumque
          eum? Ipsa nisi eius autem. Quas non similique modi, quae laudantium
          tenetur delectus totam amet ipsam corporis.
          <br />
          <br />
          Fugit deserunt temporibus nam aperiam maxime velit odio consequatur
          assumenda, eum tempore recusandae similique consectetur illum
          repellendus expedita dolor perspiciatis suscipit a sapiente
          perferendis totam libero esse, nulla voluptatum. Quo!
        </p>
      </div>

      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

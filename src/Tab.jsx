import TabBS from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Tab(){
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <TabBS eventKey="home" title="Home">
        Home
      </TabBS>
      <TabBS eventKey="profile" title="Profile">
        Profile
      </TabBS>
      <TabBS eventKey="contact" title="Contact">
        Contact
      </TabBS>
    </Tabs>
  );
}

import { useSelector } from 'react-redux';
import Notification from './Notification';

const NotificationsList = () => {
    const notifications = useSelector((state) => state.notifications.notifications);

    return (
        <div className="space-y-4">
            {notifications.map((notification) => (
                <Notification key={notification.id} message={notification.message} type={notification.type} />
            ))}
        </div>
    );
};

export default NotificationsList;

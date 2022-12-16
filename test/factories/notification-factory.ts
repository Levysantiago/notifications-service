import { Content } from '@app/entities/content';
import { INotificationProps, Notification } from '@app/entities/notification';

type IOverride = Partial<INotificationProps>;

export function makeNotification(override: IOverride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitacao de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}

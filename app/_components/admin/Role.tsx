import React from 'react';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface UserRoleProps {
  role: string;
}

const UserRole: React.FC<UserRoleProps> = ({ role }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-blue-500 text-white': role === 'Accounts',
          'bg-green-500 text-white': role === 'Manager',
          'bg-yellow-500 text-white': role === 'Seller',
        },
      )}
    >
      {role === 'Accounts' ? (
        <>
          Accounts
        </>
      ) : null}
      {role === 'Manager' ? (
        <>
          Manager
        </>
      ) : null}
      {role === 'Seller' ? (
        <>
          Seller
        </>
      ) : null}
    </span>
  );
};

export default UserRole;

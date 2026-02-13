import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from '@phosphor-icons/react';
export interface DialogProps {
  open: boolean;
  
  onOpenChange: (open: boolean) => void;
  
  title?: string;
  
  description?: string;
  
  children: React.ReactNode;
  
  contentClassName?: string;
  
  showClose?: boolean;
  
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  
  closeOnEscape?: boolean;
  
  closeOnOverlayClick?: boolean;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  contentClassName = '',
  showClose = true,
  maxWidth = '2xl',
  closeOnEscape = true,
  closeOnOverlayClick = true,
}: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out"
          onClick={closeOnOverlayClick ? () => onOpenChange(false) : undefined}
        />

        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full ${maxWidthClasses[maxWidth]} bg-white rounded-lg shadow-xl data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out max-h-[85vh] flex flex-col ${contentClassName}`}
          onEscapeKeyDown={closeOnEscape ? undefined : (e) => e.preventDefault()}
        >
          {(title || showClose) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 shrink-0">
              <div className="flex-1">
                {title && (
                  <DialogPrimitive.Title className="text-lg font-semibold text-slate-900">
                    {title}
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description className="text-sm text-slate-600 mt-1">
                    {description}
                  </DialogPrimitive.Description>
                )}
              </div>
              
              {showClose && (
                <DialogPrimitive.Close asChild>
                  <button
                    className="cursor-pointer text-slate-400 hover:text-slate-600 transition-colors rounded-md hover:bg-slate-100 p-1 ml-4"
                    aria-label="Zatvori"
                  >
                    <XIcon size={20} />
                  </button>
                </DialogPrimitive.Close>
              )}
            </div>
          )}

          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
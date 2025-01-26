"use client";

import { Dialog, DialogHeader, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";

function Settings() {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Apperance</Label>
          </div>
          <span className="text-[0.8rem] text-muted-foreground">
            Set Notate&apos;s apperance
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Settings;

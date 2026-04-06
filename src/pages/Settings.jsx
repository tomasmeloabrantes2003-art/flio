import { User, MapPin, Bell, Shield } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';

export default function Settings() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile */}
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                <p className="text-sm text-gray-600">Update your personal information</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><Label htmlFor="firstName">First name</Label><Input id="firstName" defaultValue="Tomás" className="mt-1" /></div>
                <div><Label htmlFor="lastName">Last name</Label><Input id="lastName" defaultValue="Melo" className="mt-1" /></div>
              </div>
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" defaultValue="tomas@example.com" className="mt-1" /></div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Location</h2>
                <p className="text-sm text-gray-600">Set your home airport and preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <div><Label htmlFor="homeAirport">Home airport</Label><Input id="homeAirport" defaultValue="Porto (OPO)" className="mt-1" /></div>
              <div><Label htmlFor="currency">Preferred currency</Label><Input id="currency" defaultValue="EUR (€)" className="mt-1" /></div>
              <Button className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                <p className="text-sm text-gray-600">Choose how you want to be notified</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Email notifications', desc: 'Receive alerts via email', on: true },
                { title: 'Push notifications', desc: 'Get browser notifications', on: true },
                { title: 'Weekly summary', desc: 'Receive a weekly digest of opportunities', on: false },
                { title: 'Marketing emails', desc: 'Tips, tricks, and travel inspiration', on: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 3 ? 'border-b border-gray-100' : ''}`}>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.on} />
                </div>
              ))}
            </div>
          </Card>

          {/* Privacy */}
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
                <p className="text-sm text-gray-600">Manage your account security</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Two-factor authentication', desc: 'Add an extra layer of security', btn: 'Enable' },
                { title: 'Change password', desc: 'Update your password regularly', btn: 'Change' },
                { title: 'Download my data', desc: 'Get a copy of your information', btn: 'Download' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <Button variant="outline" size="sm">{item.btn}</Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-6 bg-red-50 border border-red-200">
            <h2 className="text-xl font-semibold text-red-900 mb-2">Danger zone</h2>
            <p className="text-sm text-red-700 mb-4">Irreversible actions</p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full text-red-700 border-red-300 hover:bg-red-100">Delete all alerts</Button>
              <Button variant="outline" className="w-full text-red-700 border-red-300 hover:bg-red-100">Delete account</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

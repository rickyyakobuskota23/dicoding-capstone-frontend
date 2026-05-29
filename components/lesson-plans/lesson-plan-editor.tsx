"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Save, 
  ArrowLeft, 
  Trash2, 
  Plus, 
  Clock, 
  BookOpen, 
  Target, 
  Layers, 
  Package,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useApi } from "@/lib/api-client";

interface LessonPlanEditorProps {
  initialData: any;
}

export function LessonPlanEditor({ initialData }: LessonPlanEditorProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { updateLessonPlan } = useApi();
  const [isSaving, setIsSaving] = useState<boolean | "completing">(false);
  const [data, setData] = useState(initialData);

  const handleChange = (field: string, value: any) => {
    setData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    const newArray = [...data[field]];
    newArray[index] = value;
    setData((prev: any) => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: string) => {
    setData((prev: any) => ({ 
      ...prev, 
      [field]: [...prev[field], ""] 
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    const newArray = [...data[field]];
    newArray.splice(index, 1);
    setData((prev: any) => ({ ...prev, [field]: newArray }));
  };

  const handleActivityChange = (index: number, field: string, value: string) => {
    const newActivities = [...data.activities];
    newActivities[index] = { ...newActivities[index], [field]: value };
    setData((prev: any) => ({ ...prev, activities: newActivities }));
  };

  const handleSave = async (statusOverride?: string) => {
    setIsSaving(statusOverride === "completed" ? "completing" : true);
    try {
      const payload = statusOverride ? { ...data, status: statusOverride } : data;
      await updateLessonPlan(data.id, payload);
      toast({
        title: "Success",
        description: statusOverride === "completed" 
          ? "Lesson plan marked as completed!" 
          : "Lesson plan updated successfully.",
      });
      router.push("/lesson-plans");
      router.refresh();
    } catch (error: any) {
      toast({
        title: "Update Failed",
        description: error.message || "Could not update the lesson plan.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Edit Lesson Plan</h2>
            <p className="text-sm text-slate-500 mt-1">Refine your materials</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {data.status !== "completed" && (
            <Button 
              variant="outline" 
              onClick={() => handleSave("completed")} 
              disabled={isSaving !== false}
              className="text-green-600 border-green-200 hover:bg-green-50"
            >
              <CheckCircle className="w-4 h-4 mr-2" /> 
              {isSaving === "completing" ? "Completing..." : "Set as Completed"}
            </Button>
          )}
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button onClick={() => handleSave()} disabled={isSaving !== false} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="w-4 h-4 mr-2" /> {isSaving === true ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Basic Info */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <BookOpen className="w-5 h-5 text-blue-600" />
              General Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input 
                  value={data.title} 
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  value={data.subject} 
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>
                <Input 
                  value={data.topic} 
                  onChange={(e) => handleChange("topic", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Duration</label>
                <Input 
                  value={data.duration} 
                  onChange={(e) => handleChange("duration", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Target className="w-5 h-5 text-red-500" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {data.objectives.map((obj: string, index: number) => (
              <div key={index} className="flex gap-2">
                <Input 
                  value={obj} 
                  onChange={(e) => handleArrayChange("objectives", index, e.target.value)}
                />
                <Button variant="ghost" size="icon" onClick={() => removeArrayItem("objectives", index)}>
                  <Trash2 className="w-4 h-4 text-slate-400" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => addArrayItem("objectives")} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add Objective
            </Button>
          </CardContent>
        </Card>

        {/* Materials */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Package className="w-5 h-5 text-amber-500" />
              Materials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.materials.map((item: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <Input 
                    value={item} 
                    onChange={(e) => handleArrayChange("materials", index, e.target.value)}
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeArrayItem("materials", index)}>
                    <Trash2 className="w-4 h-4 text-slate-400" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={() => addArrayItem("materials")} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add Material
            </Button>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Layers className="w-5 h-5 text-purple-500" />
              Learning Activities (Tiered)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {data.activities.map((activity: any, index: number) => (
              <div key={index} className="space-y-3 p-4 border rounded-lg bg-slate-50/30">
                <div className="flex justify-between items-center">
                  <Badge className={activity.color || "bg-blue-100 text-blue-700"}>
                    {activity.tier}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Activity Title</label>
                  <Input 
                    value={activity.title} 
                    onChange={(e) => handleActivityChange(index, "title", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Instructions</label>
                  <Textarea 
                    value={activity.content} 
                    onChange={(e) => handleActivityChange(index, "content", e.target.value)}
                    rows={4}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Differentiation Strategies */}
        <Card>
          <CardHeader className="border-b bg-slate-50/50 py-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Plus className="w-5 h-5 text-green-500" />
              Differentiation Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content Differentiation</label>
                <Textarea 
                  value={data.differentiation_content || ""} 
                  onChange={(e) => handleChange("differentiation_content", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Process Differentiation</label>
                <Textarea 
                  value={data.differentiation_process || ""} 
                  onChange={(e) => handleChange("differentiation_process", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Product Differentiation</label>
                <Textarea 
                  value={data.differentiation_product || ""} 
                  onChange={(e) => handleChange("differentiation_product", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Environment Differentiation</label>
                <Textarea 
                  value={data.differentiation_environment || ""} 
                  onChange={(e) => handleChange("differentiation_environment", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

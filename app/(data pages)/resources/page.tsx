'use client'

import { useState, useMemo } from "react";
import { Library, Search } from "lucide-react";
import { resources } from "@/data/resource-library-data";
import { ResourceCard } from "@/components/management/ResourceCard";

export default function ResourceLibrary() {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(
    new Set(resources.filter((r) => r.isFavorite).map((r) => r.id))
  );

  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesSubject = selectedSubject === "all" || r.subject === selectedSubject;
      const matchesType = selectedType === "all" || r.type === selectedType;
      const matchesSearch = searchQuery === "" ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSubject && matchesType && matchesSearch;
    });
  }, [selectedSubject, selectedType, searchQuery]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedSubject("all");
    setSelectedType("all");
    setSearchQuery("");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Library className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
        </div>
        <p className="text-gray-600">Browse and download teaching resources for differentiated instruction</p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="all">All Subjects</option>
            {Array.from(new Set(resources.map(r => r.subject))).map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none capitalize"
          >
            <option value="all">All Types</option>
            <option value="worksheet">Worksheets</option>
            <option value="activity">Activities</option>
            <option value="video">Videos</option>
            <option value="document">Documents</option>
          </select>
        </div>

        {/* Active Filter Badges */}
        {(selectedSubject !== "all" || selectedType !== "all" || searchQuery) && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-500">Active filters:</span>
            {searchQuery && <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs border border-blue-100">Search: "{searchQuery}"</span>}
            {selectedSubject !== "all" && <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs border border-purple-100">{selectedSubject}</span>}
            {selectedType !== "all" && <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs border border-green-100 capitalize">{selectedType}</span>}
            <button onClick={clearFilters} className="text-xs font-bold text-blue-600 hover:underline ml-1">Clear all</button>
          </div>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          Showing <span className="text-gray-900">{filteredResources.length}</span> of {resources.length} resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isFavorite={favorites.has(resource.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-16 text-center shadow-sm">
          <Library className="w-16 h-16 text-gray-200 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters or search query to find what you're looking for.</p>
          <button onClick={clearFilters} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold text-sm shadow-lg shadow-blue-100">
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">ホジョクルについて</h1>
      
      <p className="text-center mb-8">
        ホジョクルは、中小企業向けの補助金サポートサービスです。
        私たちは、企業の成長と発展を支援することを使命としています。
      </p>

      <div className="text-center">
        <Button variant="default" size="lg">
          サービスを始める
        </Button>
      </div>
    </div>
  );
}